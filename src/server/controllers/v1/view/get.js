import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { loggerInfra } from "../../../infra/logger.js";
import viewGet from "../../../services/v1/view/get.js";
import { VERSIONS } from "../../../utils/constants.js";
import responseHandler from "../../../utils/response-handler.js";

export default async (request, reply) => {
  const log = loggerInfra.child({ controller: "view/get", v: VERSIONS.V1 });

  log.info("Handling request");
  const { data, message } = await viewGet(request);

  return responseHandler(request, reply, {
    code: StatusCodes.OK,
    data,
    message,
    status: ReasonPhrases.OK,
    statusCode: StatusCodes.OK,
  });
};
