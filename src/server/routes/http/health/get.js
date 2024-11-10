import getHealthHandler from "../../../controllers/health/get.js";
import { getHealthSchema } from "../../../schemas/request/health.js";
import { ROUTE_METHODS } from "../../../utils/constants.js";

export const route = () => ({
  handler: getHealthHandler,
  method: ROUTE_METHODS.GET,
  schema: getHealthSchema,
  url: "/health",
});
