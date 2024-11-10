import apiPatchHandler from "../../../../controllers/v1/api/patch.js";
import { patchSchema } from "../../../../schemas/request/v1/api.js";
import { ROUTE_METHODS } from "../../../../utils/constants.js";

export const route = () => ({
  handler: apiPatchHandler,
  method: ROUTE_METHODS.PATCH,
  schema: patchSchema,
  url: "/api/*",
});
