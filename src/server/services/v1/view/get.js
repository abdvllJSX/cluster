import { loggerInfra } from "../../../infra/logger.js";
import { SERVER } from "../../../utils/config.js";
import { VERSIONS } from "../../../utils/constants.js";
import fs from "fs";

export default async () => {
  const log = loggerInfra.child({ service: "view/get", v: VERSIONS.V1 });

  log.info("Generating app data");

  const assetFolder = 'dist/assets';

  const files = fs.readdirSync(assetFolder);
  const cssFile = files.find(entry => entry.indexOf('.css') > -1)
  const jsFile = files.find(entry => entry.indexOf('.js') > -1)

  const data = {
    base: {
      url: SERVER.URL,
    },
    page: "index",
    render: true,
    title: "Cluster Inc",
    assets: {
      jsFile: `/assets/${jsFile}`,
      cssFile: `/assets/${cssFile}`,
    }
  };

  log.info({ data }, "App data generated");
  return { data, message: "App loaded" };
};
