import { loggerInfra } from "../../../infra/logger.js";
import { SERVICE } from "../../../utils/config.js";
import { VERSIONS } from "../../../utils/constants.js";
import { apiPost } from "../../../utils/http-client.js";

export default async ({ query }) => {
  const log = loggerInfra.child({ service: "account/verify", v: VERSIONS.V1 });

  const { token } = query;

  if (!token) {
    log.info({ token }, "Token not found");
    throw new Error("Token not found");
  }

  log.info({ token }, "Token found, verifying account");
  const url = [SERVICE.BASE_URL, `/extensions/cluster/api/verify_account`].join(
    "",
  );

  log.info({ query, url }, "Calling service");
  const serviceResponse = await apiPost(url, { verification_token: token });

  log.info({ serviceResponse }, "Service response received");
  const { status } = serviceResponse;

  if (status !== "success") {
    log.info(
      { serviceResponse },
      "Account verification failed, redirecting to failed url",
    );
    return { redirect: "/accounts/verify/failed" };
  }

  log.info(
    { serviceResponse },
    "Account verification failed, redirecting to success url",
  );
  return { redirect: "/accounts/verify/complete" };
};
