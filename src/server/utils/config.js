export const SERVER = {
  APP: "cluster-fe",
  ENV: process.env.NODE_ENV,
  HOST: process.env.SERVER_HOST,
  PORT: process.env.SERVER_PORT,
  SECRET: process.env.SERVER_SECRET,
  URL: process.env.SERVER_URL,
};

export const SERVICE = {
  BASE_URL: process.env.SERVICE_BASE_URL,
};

export const LOG = {
  TOKEN: process.env.LOGTAIL_TOKEN,
};

export const SESSION = {
  REFRESH_EXPIRY: process.env.REFRESH_COOKIE_EXPIRY,
  TOKEN_EXPIRY: process.env.AUTH_COOKIE_EXPIRY,
};

export const COOKIE_CONFIG = {
  domain: SERVER.ENV === "development" ? null : process.env.AUTH_COOKIE_DOMAIN,
  httpOnly: true,
  secure: SERVER.ENV !== "development",
};

export const CLUSTER_TOKEN = process.env.CLUSTER_TOKEN;
