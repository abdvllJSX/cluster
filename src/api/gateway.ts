import { iAddGatewayPayload } from "@/api/gateway.type.ts";

import { apiGet, apiPost } from "../lib/http-client";

export const apiListGateway = () => apiGet("/v1/api/get_gateways", {});

export const apiListAllGateway = () => apiGet("/v1/api/get_all_gateways", {});

export const apiGetGatewayByName = (name: string) =>
  apiGet("/v1/api/get_gateways", { name });

export const apiCreateGateway = (body: iAddGatewayPayload) =>
  apiPost("/v1/api/add_gateway", {
    payment_gateway_id: body.paymentGatewayId,
    gateway_config: body.gatewayConfig,
  });
