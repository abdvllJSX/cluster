import { apiGet } from "../lib/http-client";

export const apiListGateway = () => apiGet("/v1/api/get_gateways", {});

export const apiListAllGateway = () => apiGet("/v1/api/get_all_gateways", {});
