import apiPostHandler from "../../../../controllers/v1/api/post.js";
import { postSchema } from "../../../../schemas/request/v1/api.js";
import { ROUTE_METHODS } from "../../../../utils/constants.js";

export const route = () => ({
  handler: apiPostHandler,
  method: ROUTE_METHODS.POST,
  schema: postSchema,
  url: "/api/*",
});
