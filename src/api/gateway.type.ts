export interface iGatewayConfigPayload {
  apiKeys: string;
  publicKeys: string;
  callbackUrl: string;
  currency: string;
  paymentChannel: string[];
  bearer: string;
}

export interface iAddGatewayPayload {
  paymentGatewayId: number;
  gatewayConfig: iGatewayConfigPayload;
}
