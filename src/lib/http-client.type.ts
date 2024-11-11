export interface iAPIResponse {
  message: string;
  status: string;
  data?: object;
}

export interface iAPIErrorResponse {
  data: iAPIResponse;
}

export interface iAPIError {
  response?: iAPIErrorResponse;
  request: object;
  message: string;
}
