import { ReasonPhrases, StatusCodes } from "http-status-codes";

/**
 * APIError
 */
export class APIError extends Error {
  /**
   * constructor
   * @param {object} errorType
   */
  constructor(errorType) {
    super(errorType.message);
    this.code = errorType.code;
    this.name = this.constructor.name;
    this.status = errorType.status;
    this.statusCode = errorType.statusCode;
  }
}

export const ERROR_CODES = {
  BAD_INPUT: "API_ERR_BAD_INPUT",
  CANNOT_DELETE_RESOURCE: "API_ERR_CANNOT_DELETE_RESOURCE",
  DUPLICATE_CONTENT: "API_ERR_DUPLICATE_CONTENT",
  INVALID_AUTHENTICATION: "API_ERR_INVALID_AUTHENTICATION",
  INVALID_LOGIN: "API_ERR_INVALID_LOGIN",
  RESOURCE_NOT_FOUND: "API_ERR_RESOURCE_NOT_FOUND",
  SERVICE_UNAVAILABLE: "API_ERR_SERVICE_UNAVAILABLE",
  SOMETHING_WENT_WRONG: "API_ERR_SOMETHING_WENT_WRONG",
  UNAUTHORIZED: "API_ERR_UNAUTHORIZED",
  UNAUTHORIZED_SESSION: "API_ERR_UNAUTHORIZED_SESSION",
};

export const internalServerError = (
  message = "Something went wrong, please try again",
  code = "API_ERR_SOMETHING_WENT_WRONG",
) => ({
  code,
  message,
  status: ReasonPhrases.INTERNAL_SERVER_ERROR,
  statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
});

export const badRequest = (message, code) => ({
  code,
  message,
  status: ReasonPhrases.BAD_REQUEST,
  statusCode: StatusCodes.BAD_REQUEST,
});

export const notFound = (message, code) => ({
  code,
  message,
  status: ReasonPhrases.NOT_FOUND,
  statusCode: StatusCodes.NOT_FOUND,
});

export const unauthorized = (message, code) => ({
  code,
  message,
  status: ReasonPhrases.UNAUTHORIZED,
  statusCode: StatusCodes.UNAUTHORIZED,
});

export const unavailable = (message, code) => ({
  code,
  message,
  status: ReasonPhrases.SERVICE_UNAVAILABLE,
  statusCode: StatusCodes.SERVICE_UNAVAILABLE,
});

export const notFoundHandler = {
  handler: (_request, reply) =>
    reply.status(404).send({
      code: ERROR_CODES.RESOURCE_NOT_FOUND,
      message: "Resource not found",
      status: ReasonPhrases.NOT_FOUND,
      statusCode: StatusCodes.NOT_FOUND,
    }),
  method: ["POST", "PUT", "PATCH", "DELETE"],
  url: "*",
};

export const registerRoutes = (routes, router, app) =>
  Object.keys(routes).forEach((key) => router.route(routes[key](app)));
