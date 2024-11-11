import { DateTime } from "luxon";

import { COOKIE_CONFIG } from "./config.js";

export default (request, reply, response) => {
  const { data, redirect } = response;
  const { id } = request;

  if (redirect) {
    return reply.redirect(redirect);
  }

  const { render = false, ...payload } = data ?? {};
  const { sessionToken } = payload ?? {};
  const isAuth = isAuthRequest(request.url);

  if (render) {
    reply.header("Cache-Control", "no-cache");
    const { page, ...locals } = payload;
    return reply.view(page, { ...locals });
  }

  if (sessionToken) {
    delete response.data.sessionToken;
    reply = setCookies(reply, { sessionToken });
  }

  if (isAuth && !sessionToken) {
    reply = removeCookies(reply);
  }

  return reply.header("x-request-id", id).send(response);
};

const setCookies = (reply, tokens) => {
  const { sessionToken } = tokens;

  if (sessionToken) {
    reply.setCookie("cluster-auth-token", sessionToken, {
      ...COOKIE_CONFIG,
      // maxAge: SESSION.TOKEN_EXPIRY,
      path: "/v1/api",
    });
  }

  return reply;
};

const removeCookies = (reply) => {
  const pastDay = new Date(DateTime.now().minus({ days: 7 }).toISO());

  return reply.setCookie("cluster-auth-token", "no-token", {
    ...COOKIE_CONFIG,
    expires: pastDay,
    path: "/v1/api",
  });
};

export const isAuthRequest = (url) => {
  const endpoint = url.split("?")[0];
  return endpoint.includes("/authenticate");
};

export const isLoginRequest = (url) => {
  const endpoint = url.split("?")[0];
  return endpoint.includes("/authenticate");
};

export const isVerifyRequest = (url) => {
  const endpoint = url.split("?")[0];
  return endpoint.includes("/auth/verify");
};

export const isAPIRequest = (url) => {
  const endpoint = url.split("?")[0];
  return endpoint.includes("/api/auth");
};
