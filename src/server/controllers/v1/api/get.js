import { loggerInfra } from "../../../infra/logger.js";
import proxyGet from "../../../services/v1/api/get.js";
import { VERSIONS } from "../../../utils/constants.js";
import responseHandler from "../../../utils/response-handler.js";

export default async (request, reply) => {
  const log = loggerInfra.child({ controller: "api/get", v: VERSIONS.V1 });

  log.info("Handling request");
  const { code, statusCode, status, message, data, meta } =
    await proxyGet(request);

  return responseHandler(request, reply, {
    code,
    data,
    message,
    meta,
    status,
    statusCode,
  });
};
