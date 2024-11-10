import fp from "fastify-plugin";

import { APIError } from "./api.js";
import { SERVER } from "./config.js";
import { UNAUTHORIZED_SESSION_ACCESS } from "./errors.js";
import {
  isAPIRequest,
  isLoginRequest,
  isVerifyRequest,
} from "./response-handler.js";

/**
 * parseRequest
 * @return {*}
 */
export function parseRequest() {
  return fp(async function (fastify) {
    fastify.addHook("onRequest", async function (request) {
      const { query, url, cookies } = request;

      let sig;
      let sessionId;
      if (cookies) {
        sessionId = cookies["x-session-id"];
        sig =
          cookies["cluster-auth-token"] ??
          cookies["cluster-refresh-token"];
        if (
          !sig &&
          isAPIRequest(url) &&
          !isLoginRequest(url) &&
          !isVerifyRequest(url)
        ) {
          throw new APIError(UNAUTHORIZED_SESSION_ACCESS);
        }
      }

      const _query = {};
      Object.keys(query).map((key) => {
        if (!isNaN(query[key])) {
          _query[key] = Number(query[key]);
        } else {
          _query[key] = query[key];
        }
      });

      request.sessionId = sessionId;
      request.token = sig;
      request.endpoint = url
        .split("?")[0]
        .replace("/v1", "")
        .replace("/api", "");
      request.query = _query;
    });
  });
}

/**
 * parseCSP
 * @return {*}
 */
export function parseCSP() {
  return fp(async function (fastify) {
    fastify.addHook("onRequest", async function (_request, reply) {
      const policies = {
        "connect-src": ["'self'", "blob:", "data:", SERVER.URL],
        "default-src": ["'self'", SERVER.URL],
        "font-src": ["'self'", "data:", "https://fonts.cdnfonts.com"],
        "frame-ancestors": ["'self'", SERVER.URL],
        "frame-src": ["'self'"],
        "img-src": ["'self'", "data:", "blob:"],
        "media-src": ["'self'", "blob:", "data:"],
        "script-src": ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
        "script-src-elem": ["'self'", "'unsafe-inline'", SERVER.URL],
        "style-src": ["'self'", "'unsafe-inline'"],
        "style-src-elem": ["'self'", "'unsafe-inline'", "https://fonts.cdnfonts.com"],
        "worker-src": ["'self'", "'unsafe-eval'", "'unsafe-inline'", "blob:"],
      };

      const csp = Object.keys(policies).map(
        (key) => `${key} ${policies[key].join(" ")}`,
      );

      reply.header("Content-Security-Policy", csp.join(";"));
    });
  });
}
