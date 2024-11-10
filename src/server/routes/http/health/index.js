import { route } from "./get.js";

export default (fastify) => {
  fastify.route(route());
};
