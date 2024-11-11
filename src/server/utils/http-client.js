import axios from "axios";
import { ReasonPhrases } from "http-status-codes";

import { CLUSTER_TOKEN } from "../utils/config.js";

const handleErrorResponse = (error) => {
  if (error.response) {
    const { data } = error.response;
    const { message, status } = JSON.parse(data ?? "{}");
    return {
      message,
      status,
    };
  }

  if (error.request) {
    return {
      message: error.message,
      status: ReasonPhrases.BAD_GATEWAY,
    };
  }

  return {
    message: error.message,
    status: ReasonPhrases.INTERNAL_SERVER_ERROR,
  };
};

const handleOkResponse = (response) => {
  const payload = JSON.parse(!!response?.data ? response.data : "{}");
  if (payload.data) {
    const { message, status, data } = payload;
    return {
      data,
      message,
      status,
    };
  }

  return {
    message: payload.message,
    status: payload.status,
  };
};

const HEADERS = {
  "Content-Type": "application/json",
  HTTP_AUTHORIZATION_TOKEN: CLUSTER_TOKEN,
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
