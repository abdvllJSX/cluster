import { registerRoutes } from "../../../utils/api.js";
import * as accountRoutes from "./account/index.js";
import * as apiRoutes from "./api/index.js";

export default (router, fastify) => {
  registerRoutes(apiRoutes, router, fastify);
  registerRoutes(accountRoutes, router, fastify);
};
