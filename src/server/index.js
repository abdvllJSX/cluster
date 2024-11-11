import compress from "@fastify/compress";
import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import formBody from "@fastify/formbody";
import helmet from "@fastify/helmet";
import multiPart from "@fastify/multipart";
import { fastifyRequestContext } from "@fastify/request-context";
import fastifyStatic from "@fastify/static";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import view from "@fastify/view";
import fastify from "fastify";
import blipp from "fastify-blipp";
import path from "path";
import pug from "pug";
import { fileURLToPath } from "url";
import { v4 as uuid } from "uuid";

import logger from "./libs/logger.js";
import { registerHttpRoutes } from "./routes/index.js";
import { config } from "./utils/ajv.js";
import { SERVER } from "./utils/config.js";
import errorHandler from "./utils/error-handler.js";
import { parseCSP, parseRequest } from "./utils/fastify-hooks.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * buildApp
 * @return {Promise<void>}
 */
export async function buildApp() {
  try {
    logger.info("Building fastify app");

    const app = fastify({
      ajv: config,
      exposeHeadRoutes: false,
      genReqId: (request) => request.headers["x-request-id"] || uuid(),
      loggerInstance: logger,
      trustProxy: 1,
    });

    app.register(fastifyRequestContext, {
      defaultStoreValues: {
        logger: logger.child({ serviceName: "cluster-fe" }),
      },
    });

    app.register(multiPart, { attachFieldsToBody: "keyValues" });
    app.register(formBody);

    app.register(cors, {
      credentials: true,
      exposedHeaders: ["Set-Cookie"],
      origin: async (origin) => origin === SERVER.URL,
    });

    if (process.env.NODE_ENV === "development") {
      logger.info("Registering blipp route list generator");
      app.register(blipp);
    }

    let helmetConfig;
    if (process.env.NODE_ENV === "development") {
      logger.info("Building helmet dev config object");
      helmetConfig = {
        contentSecurityPolicy: {
          directives: {
            defaultSrc: ["'self'"],
            imgSrc: ["'self'", "'data:'", "'validator.swagger.io'"],
            scriptSrc: ["'self'", "'https:'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
          },
        },
        crossOriginEmbedderPolicy: false,
        referrerPolicy: {
          policy: "strict-origin-when-cross-origin",
        },
      };
    }

    app.register(helmet, helmetConfig);
    app.register(compress);
    app.register(cookie);

    app.register(view, { engine: { pug }, root: "./src/server/views" });

    app.register(parseCSP());
    app.register(parseRequest());

    app.register(fastifyStatic, {
      prefix: "/libs",
      root: path.join(__dirname, "../../node_modules"),
    });

    app.register(fastifyStatic, {
      decorateReply: false,
      prefix: "/assets",
      root: path.join(__dirname, "../../dist", "assets"),
    });

    app.register(fastifyStatic, {
      decorateReply: false,
      prefix: "/img",
      root: path.join(__dirname, "../../dist", "img"),
    });

    app.register(fastifyStatic, {
      decorateReply: false,
      prefix: "/app",
      root: path.join(__dirname, "../../dist", "assets"),
    });

    logger.info("Registering default error handler");
    app.setErrorHandler((error, request, reply) =>
      errorHandler(error, request, reply),
    );

    if (process.env.NODE_ENV === "development") {
      logger.info("Registering swagger doc generator");
      app.register(swagger, {
        exposeRoute: true,
        openapi: {
          components: {
            securitySchemes: {
              apiKey: {
                in: "header",
                name: "x-session-token",
                type: "apiKey",
              },
            },
          },
          info: {
            description: "Cluster FE Service",
            title: "Cluster Inc",
            version: "0.0.1",
          },
          servers: [
            {
              description: "Development Server",
              url: SERVER.URL,
            },
          ],
        },
      });
      app.register(swaggerUi, {
        initOAuth: {},
        routePrefix: "/docs",
        staticCSP: true,
        transformStaticCSP: (header) => header,
        uiConfig: {
          deepLinking: false,
          docExpansion: "full",
        },
        uiHooks: {
          onRequest: function (_request, _reply, next) {
            next();
          },
          preHandler: function (_request, _reply, next) {
            next();
          },
        },
      });
    }

    logger.info("Registering routes");
    await registerRoutes(app);

    return app;
  } catch (error) {
    logger.error({ err: error }, error.message);
  }
}

const registerRoutes = async (app) => {
  logger.info("Registering HTTP routes");
  registerHttpRoutes(app);
};
