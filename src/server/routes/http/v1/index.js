import { registerRoutes } from "../../../utils/api.js";
import * as apiRoutes from "./api/index.js";

export default (router, fastify) => {
  registerRoutes(apiRoutes, router, fastify);
};
