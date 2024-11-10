import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { loggerInfra } from "../../infra/logger.js";
import getHealthMessage from "../../services/health/get.js";
import responseHandler from "../../utils/response-handler.js";

export default (request, reply) => {
  const log = loggerInfra.child({ controller: "health/get" });

  log.info("Handling request");
  const { data } = getHealthMessage();

  return responseHandler(request, reply, {
    code: StatusCodes.OK,
    message: data,
    status: ReasonPhrases.OK,
    statusCode: StatusCodes.OK,
  });
};
