import { loggerInfra } from "../../infra/logger.js";
import { VERSIONS } from "../../utils/constants.js";

export default () => {
  const log = loggerInfra.child({
    service: "getHealthMessage",
    v: VERSIONS.V1,
  });
  log.info("Generating health message");
  return { data: "Results africa web is running fine" };
};
