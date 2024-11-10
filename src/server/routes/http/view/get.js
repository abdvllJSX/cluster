import viewGetHandler from "../../../controllers/v1/view/get.js";
import { ROUTE_METHODS } from "../../../utils/constants.js";

export const route = () => ({
  handler: viewGetHandler,
  method: ROUTE_METHODS.GET,
  url: "*",
});
