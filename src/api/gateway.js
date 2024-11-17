import { apiGet } from "../lib/http-client";


export const apiGetPaymentGateways = () => 
    apiGet("/v1/api/get_gateways", {})