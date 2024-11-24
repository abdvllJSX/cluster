export interface iSecretKeyPayLoad {
    apiSecret: Number,
    apiKey: string,
    webhookURL: string,
    successCallbackURL: string,
    failureCallbackURL:string
}