import { apiGet } from "@/lib/http-client.ts";
import { iTransaction } from "./transaction.type";

export const apiListGatewayTransactions = (id: string, params?: iTransaction) =>
  apiGet(`/v1/api/get_gateway_transactions/${id}`, { ...params });

export const apiGetTransactionDetails = (id: string) =>
  apiGet(`/v1/api/get_gateway_transaction/${id}`, {});
