export interface iSecretKeyPayLoad {
    apiSecret: Number,
    apiKey: string,
    webhookURL: string,
    successCallbackURL: string,
    failureCallbackURL: string
}

export interface iUpdateProfilePayLoad {
    name: string;
    label: string;
    description: string;
    businessPhone: string;
    firstName: string;
    lastName: string;
    phone: string
}