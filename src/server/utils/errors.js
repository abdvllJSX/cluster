import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const SOMETHING_WENT_WRONG = {
  code: "API_ERR_SOMETHING_WENT_WRONG",
  message: "Something went wrong, please try again",
  status: ReasonPhrases.INTERNAL_SERVER_ERROR,
  statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
};

export const PROVIDER_NOT_FOUND = {
  code: "API_ERR_RESOURCE_NOT_FOUND",
  message: "Provider not found, please try again",
  status: ReasonPhrases.NOT_FOUND,
  statusCode: StatusCodes.NOT_FOUND,
};

export const ACCOUNT_NOT_FOUND = {
  code: "API_ERR_RESOURCE_NOT_FOUND",
  message: "Account not found, please try again",
  status: ReasonPhrases.NOT_FOUND,
  statusCode: StatusCodes.NOT_FOUND,
};

export const UNAUTHORIZED_SESSION_ACCESS = {
  code: "API_ERR_UNAUTHORIZED_SESSION",
  message: "Unauthorized access",
  status: ReasonPhrases.UNAUTHORIZED,
  statusCode: StatusCodes.UNAUTHORIZED,
};
