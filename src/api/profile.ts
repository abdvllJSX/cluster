import { apiGet } from "@/lib/http-client";

export const apiGetMe = () => apiGet('/v1/api/get_profile', {})