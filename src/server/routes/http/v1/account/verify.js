import verifyAccountHandler from "../../../../controllers/v1/account/verify.js";
import { verifyAccountSchema } from "../../../../schemas/request/v1/account.js";
import { ROUTE_METHODS } from "../../../../utils/constants.js";

export const route = () => ({
  handler: verifyAccountHandler,
  method: ROUTE_METHODS.GET,
  schema: verifyAccountSchema,
  url: "/accounts/verify",
});
