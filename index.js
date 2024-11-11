import "dotenv/config";
import { get } from "node-emoji";

import { buildApp } from "./src/server/index.js";
import logger from "./src/server/libs/logger.js";
import { SERVER } from "./src/server/utils/config.js";

let app;
const runServer = async () => {
  try {
    logger.info("Starting server");
    app = await buildApp();

    logger.info(
      {
        host: SERVER.HOST,
        port: SERVER.PORT,
      },
      "Binding server to port and host",
    );
    await app.listen({
      host: SERVER.HOST,
      port: SERVER.PORT,
    });

    if (process.env.NODE_ENV === "development") {
      logger.info("Generating swagger docs for server");
      // app.swagger();
    }

    if (process.env.NODE_ENV === "development") {
      logger.info("Generating route list for server");
      app.blipp();
    }

    logger.info(`${get(`fire`)} on ${SERVER.URL}`);
  } catch (error) {
    logger.error(error, "Error occurred while starting server");
  }
};

runServer().catch((e) => logger.info({ e }, "Error starting server"));

const shutdown = async (event) => {
  logger.info({
    msg: `[Index] Gracefully shutting down because of interrupt ${event}`,
  });
  try {
    if (app) {
      await app.close();
      logger.info({ msg: "[Index] Fastify instance closed" });
    }
    process.exit(0);
  } catch (error) {
    logger.error(error, "[Index] Error gracefully shutting down");
    process.exit(1);
  }
};

process.on("SIGINT", () => shutdown("SIGINT"));

process.on("SIGHUP", () => shutdown("SIGHUP"));

process.on("SIGQUIT", () => shutdown("SIGQUIT"));

process.on("SIGABRT", () => shutdown("SIGABRT"));

process.on("SIGTERM", () => shutdown("SIGTERM"));

process.on("uncaughtException", (error) => {
  logger.error(error, "Uncaught exception occurred");
});

process.on("unhandledRejection", (error) => {
  logger.error(error, "Unhandled rejection occurred");
});
