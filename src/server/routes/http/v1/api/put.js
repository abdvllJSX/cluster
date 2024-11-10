import apiPutHandler from "../../../../controllers/v1/api/put.js";
import { putSchema } from "../../../../schemas/request/v1/api.js";
import { ROUTE_METHODS } from "../../../../utils/constants.js";

export const route = () => ({
  handler: apiPutHandler,
  method: ROUTE_METHODS.PUT,
  schema: putSchema,
  url: "/api/*",
});
