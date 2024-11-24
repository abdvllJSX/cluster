import { apiGet, apiPost } from "@/lib/http-client";
import { iSecretKeyPayLoad } from "./profile.type";
export const apiGetMe = () => apiGet('/v1/api/get_profile', {})


export const apiSetSecretKey = (body: iSecretKeyPayLoad) => apiPost("/v1/api/update_api_config",  {
    api_secret: body.apiSecret,
    api_key: body.apiKey,
    webhook_url: body.webhookURL,
    success_callback_url: body.successCallbackURL,
    failure_callback_url: body.failureCallbackURL
})

export const apiGetSecretKey = () => apiGet("/v1/api/get_api_config", {})