import axios from "axios";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const handleErrorResponse = (error) => {
  if (error.response) {
    const { data } = error.response;
    const { statusCode, message, code, status } = JSON.parse(data ?? "{}");
    return {
      code,
      message,
      status,
      statusCode,
    };
  }

  if (error.request) {
    return {
      code: StatusCodes.BAD_GATEWAY,
      message: error.message,
      status: ReasonPhrases.BAD_GATEWAY,
      statusCode: StatusCodes.BAD_GATEWAY,
    };
  }

  return {
    code: StatusCodes.INTERNAL_SERVER_ERROR,
    message: error.message,
    status: ReasonPhrases.INTERNAL_SERVER_ERROR,
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  };
};

const handleOkResponse = (response) => {
  const payload = JSON.parse(!!response?.data ? response.data : "{}");
  if (payload.data) {
    const { statusCode, code, message, status, data, meta } = payload;
    return {
      code,
      data,
      message,
      meta,
      status,
      statusCode,
    };
  }

  return payload;
};

const HEADERS = {
  "User-Agent": "axios",
};

const OPTIONS = {
  responseType: "JSON",
  withCredentials: true,
};

export const apiGet = (url, params, headers = {}) =>
  axios({
    ...OPTIONS,
    headers: {
      ...HEADERS,
      ...headers,
    },
    method: "GET",
    params,
    url,
  })
    .then(handleOkResponse)
    .catch(handleErrorResponse);

export const apiDelete = (url, params, headers = {}) =>
  axios({
    ...OPTIONS,
    headers: {
      ...HEADERS,
      ...headers,
    },
    method: "DELETE",
    params,
    url,
  })
    .then(handleOkResponse)
    .catch(handleErrorResponse);

export const apiPost = (url, data, headers = {}) =>
  axios({
    ...OPTIONS,
    data,
    headers: {
      ...HEADERS,
      ...headers,
    },
    method: "POST",
    url,
  })
    .then(handleOkResponse)
    .catch(handleErrorResponse);

export const apiPatch = (url, data, headers = {}) =>
  axios({
    ...OPTIONS,
    data,
    headers: {
      ...HEADERS,
      ...headers,
    },
    method: "PATCH",
    url,
  })
    .then(handleOkResponse)
    .catch(handleErrorResponse);

export const apiPut = (url, data, headers = {}) =>
  axios({
    ...OPTIONS,
    data,
    headers: {
      ...HEADERS,
      ...headers,
    },
    method: "PUT",
    url,
  })
    .then(handleOkResponse)
    .catch(handleErrorResponse);

export const apiUpload = (url, data, headers = {}) =>
  axios({
    data,
    headers: {
      ...HEADERS,
      ...headers,
      contentType: "multipart/form-data",
    },
    method: "POST",
    responseType: "JSON",
    url,
  })
    .then(handleOkResponse)
    .catch(handleErrorResponse);
