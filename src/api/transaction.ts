import { apiGet } from "@/lib/http-client.ts";

export const apiListGatewayTransactions = (id: string) =>
  apiGet(`/v1/api/get_gateway_transactions/${id}`, {});

export const apiGetTransactionDetails = (id: string) =>
  apiGet(`/v1/api/get_gateway_transaction/${id}`, {});
