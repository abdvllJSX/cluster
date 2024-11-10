import { ReasonPhrases } from "http-status-codes";

import { loggerInfra } from "../infra/logger.js";
import { ERROR_CODES } from "./api.js";

export default (error, request, reply) => {
  const log = loggerInfra.child({ util: "Error Handler" });

  log.error({ err: error }, "Error occurred");
  const { id } = request;

  if (error?.validation?.length) {
    error.message = error.validation[0].message;
  }

  if (error.code === "FST_ERR_VALIDATION") {
    error.code = ERROR_CODES.BAD_INPUT;
    error.status = ReasonPhrases.BAD_REQUEST;
  }

  const err = {
    code: error.code ?? "API_ERR_INTERNAL_SERVER",
    message: error.message,
    status: error.status ?? error.code ?? "Internal Server Error",
    statusCode: error.statusCode ?? 500,
  };

  log.info({ ...err }, "Error returned");
  return reply.code(err.statusCode).header("x-request-id", id).send(err);
};
