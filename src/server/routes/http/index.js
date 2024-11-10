import { notFoundHandler } from "../../utils/api.js";
import { VERSIONS } from "../../utils/constants.js";
import healthRoutes from "./health/index.js";
import v1Routes from "./v1/index.js";
import viewRoutes from "./view/index.js";

export default (fastify) => {
  // Register application routes
  fastify.register(
    (router, _, next) => {
      // Register v1 routes
      v1Routes(router, fastify);
      next();
    },
    { prefix: VERSIONS.V1 },
  );

  fastify.register((router, _, next) => {
    // Register health route
    healthRoutes(router);

    // Register view route
    viewRoutes(router);

    // Register 404 handler
    router.route(notFoundHandler);
    next();
  });
};
