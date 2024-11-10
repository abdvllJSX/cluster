import apiDeleteHandler from "../../../../controllers/v1/api/delete.js";
import { deleteSchema } from "../../../../schemas/request/v1/api.js";
import { ROUTE_METHODS } from "../../../../utils/constants.js";

export const route = () => ({
  handler: apiDeleteHandler,
  method: ROUTE_METHODS.DELETE,
  schema: deleteSchema,
  url: "/api/*",
});
