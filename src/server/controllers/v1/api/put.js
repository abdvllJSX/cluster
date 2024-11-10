import { loggerInfra } from "../../../infra/logger.js";
import proxyPut from "../../../services/v1/api/put.js";
import { VERSIONS } from "../../../utils/constants.js";
import responseHandler from "../../../utils/response-handler.js";

export default async (request, reply) => {
  const log = loggerInfra.child({ controller: "api/put", v: VERSIONS.V1 });

  log.info("Handling request");
  const { code, statusCode, status, message, data } = await proxyPut(request);

  return responseHandler(request, reply, {
    code,
    data,
    message,
    status,
    statusCode,
  });
};
