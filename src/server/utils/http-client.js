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

const handleOkResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const payload = await response.json();
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
  credentials: "include",
};

export const apiGet = async (url, params, headers = {}) => {
  try {
    let urlParams = "";
    if (Object.keys(params).length > 0) {
      const stringParams = new URLSearchParams(params);
      urlParams = `?${stringParams}`;
    }

    const response = await fetch(`${url}${urlParams}`, {
      ...OPTIONS,
      headers: {
        ...HEADERS,
        ...headers,
      },
      method: "GET",
    });
    return handleOkResponse(response);
  } catch (error) {
    return handleErrorResponse(error);
  }
};

export const apiDelete = async (url, params, headers = {}) => {
  try {
    let urlParams = "";
    if (Object.keys(params).length > 0) {
      const stringParams = new URLSearchParams(params);
      urlParams = `?${stringParams}`;
    }

    const response = await fetch(`${url}${urlParams}`, {
      ...OPTIONS,
      headers: {
        ...HEADERS,
        ...headers,
      },
      method: "DELETE",
    });
    return handleOkResponse(response);
  } catch (error) {
    return handleErrorResponse(error);
  }
};

export const apiPost = async (url, data, headers = {}) => {
  try {
    const response = await fetch(url, {
      ...OPTIONS,
      body: JSON.stringify(data),
      headers: {
        ...HEADERS,
        ...headers,
      },
      method: "POST",
    });
    return handleOkResponse(response);
  } catch (error) {
    return handleErrorResponse(error);
  }
};

export const apiPatch = async (url, data, headers = {}) => {
  try {
    const response = await fetch(url, {
      ...OPTIONS,
      body: JSON.stringify(data),
      headers: {
        ...HEADERS,
        ...headers,
      },
      method: "PATCH",
    });
    return handleOkResponse(response);
  } catch (error) {
    return handleErrorResponse(error);
  }
};

export const apiPut = async (url, data, headers = {}) => {
  try {
    const response = await fetch(url, {
      ...OPTIONS,
      body: JSON.stringify(data),
      headers: {
        ...HEADERS,
        ...headers,
      },
      method: "PUT",
    });
    return handleOkResponse(response);
  } catch (error) {
    return handleErrorResponse(error);
  }
};

export const apiUpload = (url, data, headers = {}) =>
  fetch(url, {
    body: JSON.stringify(data),
    headers: {
      ...HEADERS,
      ...headers,
      contentType: "multipart/form-data",
    },
    method: "POST",
  })
    .then(handleOkResponse)
    .catch(handleErrorResponse);
