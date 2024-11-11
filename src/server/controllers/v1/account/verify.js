import { loggerInfra } from "../../../infra/logger.js";
import verifyAccount from "../../../services/v1/account/verify.js";
import { VERSIONS } from "../../../utils/constants.js";
import responseHandler from "../../../utils/response-handler.js";

export default async (request, reply) => {
  const log = loggerInfra.child({
    controller: "account/verify",
    v: VERSIONS.V1,
  });

  log.info("Handling request");
  const { redirect } = await verifyAccount(request);

  return responseHandler(request, reply, { redirect });
};
