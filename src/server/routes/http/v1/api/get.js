import apiGetHandler from "../../../../controllers/v1/api/get.js";
import { getSchema } from "../../../../schemas/request/v1/api.js";
import { ROUTE_METHODS } from "../../../../utils/constants.js";

export const route = () => ({
  handler: apiGetHandler,
  method: ROUTE_METHODS.GET,
  schema: getSchema,
  url: "/api/*",
});
