import { apiGet, apiPost } from "@/lib/http-client";
import { iSecretKeyPayLoad, iUpdateProfilePayLoad } from "./profile.type";
export const apiGetMe = () => apiGet('/v1/api/get_profile', {})


export const apiSetSecretKey = (body: iSecretKeyPayLoad) => apiPost("/v1/api/update_api_config", {
    api_secret: body.apiSecret,
    api_key: body.apiKey,
    webhook_url: body.webhookURL,
    success_callback_url: body.successCallbackURL,
    failure_callback_url: body.failureCallbackURL
})

export const apiGetSecretKey = () => apiGet("/v1/api/get_api_config", {})

export const apiUpdateProfile = (body: iUpdateProfilePayLoad) => apiPost("v1/api/update_profile", {
    business_information: {
        name: body.name,
        label: body.label,
        description: body.description,
        business_phone: body.businessPhone
    },
    personal_information: {
        first_name: body.firstName,
        last_name: body.lastName,
        phone: body.phone
    }
})