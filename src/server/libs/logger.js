import pino from "pino";

import { LOG, SERVER } from "../utils/config.js";

const defaultOptions = {
  redact: {
    censor: "[CLUSTER REDACTED]",
    paths: [
      "*.phoneNumber",
      "phoneNumber",
      "*.businessPhone",
      "businessPhone",
      "*.emailAddress",
      "emailAddress",
      "*.email",
      "email",
      "*.username",
      "username",
      "*.password",
      "password",
      "*.authToken",
      "authToken",
      "*.refreshToken",
      "refreshToken",
      "*.sessionId",
      "sessionId",
      "passwordHash",
      "confirmPassword",
      "*.confirmPassword",
    ],
  },
};

const targets = [
  {
    options: {
      destination: `./logs/app.log`,
      mkdir: true,
    },
    target: "pino/file",
  },
];

if (!["development", "dev"].includes(SERVER.ENV)) {
  targets.push({
    options: {
      sourceToken: LOG.TOKEN,
    },
    target: "@logtail/pino",
  });
}

targets.push({
  options: {
    destination: 1,
  },
  target: "pino-pretty",
});

const logger = () =>
  pino({
    ...defaultOptions,
    transport: { targets },
  });

export default logger();
