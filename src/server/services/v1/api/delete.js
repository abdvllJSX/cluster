import { loggerInfra } from "../../../infra/logger.js";
import { SERVICE } from "../../../utils/config.js";
import { VERSIONS } from "../../../utils/constants.js";
import { apiDelete } from "../../../utils/http-client.js";

export default async ({ endpoint, id, query, token }) => {
  const log = loggerInfra.child({ service: "api/delete", v: VERSIONS.V1 });

  const headers = {
    "x-request-id": id,
  };

  if (token) {
    log.info({ headers, token }, "Attaching auth token header to headers");
    headers["Authorization"] = `Bearer ${token}`;
  }

  const url = [SERVICE.BASE_URL, `/extensions/cluster/api`, endpoint].join("");

  log.info({ query, url }, "Calling service");
  return apiDelete(url, query, headers);
};
