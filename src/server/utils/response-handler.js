import { DateTime } from "luxon";

import { COOKIE_CONFIG, SESSION } from "./config.js";

export default (request, reply, response) => {
  const { code, data, statusCode } = response;
  const { id } = request;

  const { render = false, ...payload } = data ?? {};
  const { authToken, refreshToken, sessionId } = payload ?? {};
  const isAuth = isAuthRequest(request.url);

  if (render) {
    reply.header("Cache-Control", "no-cache");
    const { page, ...locals } = payload;
    return reply.view(page, { ...locals });
  }

  if (authToken || refreshToken) {
    delete response.data.authToken;
    delete response.data.refreshToken;
    // delete response.data.sessionId;
    reply = setCookies(reply, { authToken, refreshToken, sessionId });
  }

  if (isAuth && !authToken && !refreshToken) {
    reply = removeCookies(reply);
  }

  return reply
    .code(statusCode ?? code)
    .header("x-request-id", id)
    .send(response);
};

const setCookies = (reply, tokens) => {
  const { authToken, refreshToken, sessionId } = tokens;

  reply.setCookie("x-session-id", sessionId, {
    ...COOKIE_CONFIG,
    maxAge: SESSION.TOKEN_EXPIRY,
    path: "/",
  });

  if (authToken) {
    reply.setCookie("cluster-auth-token", authToken, {
      ...COOKIE_CONFIG,
      maxAge: SESSION.TOKEN_EXPIRY,
      path: "/v1/api",
    });
  }

  if (refreshToken) {
    reply.setCookie("cluster-refresh-token", refreshToken, {
      ...COOKIE_CONFIG,
      maxAge: SESSION.REFRESH_EXPIRY,
      path: "/v1/api/auth",
    });
  }

  return reply;
};

const removeCookies = (reply) => {
  const pastDay = new Date(DateTime.now().minus({ days: 7 }).toISO());

  return reply
    .setCookie("x-session-id", "no-token", {
      ...COOKIE_CONFIG,
      expires: pastDay,
      path: "/",
    })
    .setCookie("cluster-auth-token", "no-token", {
      ...COOKIE_CONFIG,
      expires: pastDay,
      path: "/v1/api",
    })
    .setCookie("cluster-refresh-token", "no-token", {
      ...COOKIE_CONFIG,
      expires: pastDay,
      path: "/v1/api/auth",
    });
};

export const isAuthRequest = (url) => {
  const endpoint = url.split("?")[0];
  return endpoint.includes("/auth");
};

export const isLoginRequest = (url) => {
  const endpoint = url.split("?")[0];
  return endpoint.includes("/auth/login");
};

export const isVerifyRequest = (url) => {
  const endpoint = url.split("?")[0];
  return endpoint.includes("/auth/verify");
};

export const isAPIRequest = (url) => {
  const endpoint = url.split("?")[0];
  return endpoint.includes("/api/auth");
};
