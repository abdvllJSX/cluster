import { loggerInfra } from "../../../infra/logger.js";
import { SERVICE } from "../../../utils/config.js";
import { VERSIONS } from "../../../utils/constants.js";
import { apiPut } from "../../../utils/http-client.js";

export default async ({ body, endpoint, id, token }) => {
  const log = loggerInfra.child({ service: "api/put", v: VERSIONS.V1 });

  const headers = {
    "x-request-id": id,
  };

  if (token) {
    log.info({ headers, token }, "Attaching auth token header to headers");
    headers["Authorization"] = `Bearer ${token}`;
  }

  const url = [SERVICE.BASE_URL, `/${VERSIONS.V1}`, endpoint].join("");

  log.info({ body, url }, "Calling service");
  return apiPut(url, body, headers);
};