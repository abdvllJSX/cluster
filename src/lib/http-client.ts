import { iAPIError, iAPIResponse } from "@/lib/http-client.type.ts";
import axios from "axios";
import { ReasonPhrases } from "http-status-codes";

const httpClient = axios.create({
  baseURL: "http://localhost:1010",
});

const handleErrorResponse = (error: iAPIError) => {
  if (error.response) {
    const { data } = error.response;
    const { message, status } = data;
    throw {
      message,
      status,
    };
  }

  if (error.request) {
    throw {
      message: error.message,
      status: ReasonPhrases.BAD_GATEWAY,
    };
  }

  throw {
    message: error.message,
    status: ReasonPhrases.INTERNAL_SERVER_ERROR,
  };
};

const handleOkResponse = (response: { data: iAPIResponse }) => {
  const payload = response?.data;
  const { message, status, data } = payload;
  if (payload.status !== "success") {
    throw {
      message,
      status,
    };
  }

  return {
    data,
    message,
    status,
  };
};

export const apiDelete = async (url: string, filter: object) =>
  httpClient
    .delete(url, filter)
    .then(handleOkResponse)
    .catch(handleErrorResponse);

export const apiGet = async (url: string, filter: object) =>
  httpClient.get(url, filter).then(handleOkResponse).catch(handleErrorResponse);

export const apiPatch = async (url: string, body: object) =>
  httpClient.patch(url, body).then(handleOkResponse).catch(handleErrorResponse);

export const apiPost = async (url: string, body: object) =>
  httpClient.post(url, body).then(handleOkResponse).catch(handleErrorResponse);
