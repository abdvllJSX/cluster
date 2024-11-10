import { loggerInfra } from "../../../infra/logger.js";
import { SERVICE } from "../../../utils/config.js";
import { VERSIONS } from "../../../utils/constants.js";
import { apiGet } from "../../../utils/http-client.js";

export default async ({ endpoint, id, query, token }) => {
  const log = loggerInfra.child({ service: "api/get", v: VERSIONS.V1 });

  const headers = {
    "x-request-id": id,
  };

  if (token) {
    log.info({ headers, token }, "Attaching auth token header to headers");
    headers["Authorization"] = `Bearer ${token}`;
  }

  const url = [SERVICE.BASE_URL, `/${VERSIONS.V1}`, endpoint].join("");

  log.info({ query, url }, "Calling service");
  return apiGet(url, query, headers);
};
