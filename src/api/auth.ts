import {
  iCreatePasswordPayload,
  iLoginPayload,
  iResetPasswordRequestPayload,
  iSignupPayload,
} from "@/api/auth.type.ts";

import { apiPost } from "../lib/http-client";

export const apiLogin = (credentials: iLoginPayload) =>
  apiPost("/v1/api/authenticate", { ...credentials });

export const apiSignUp = (body: iSignupPayload) =>
  apiPost("/v1/api/register", { ...body });

export const apiRequestResetPassword = (body: iResetPasswordRequestPayload) =>
  apiPost("/v1/api/recover", { ...body });

export const apiCreatePassword = (body: iCreatePasswordPayload) =>
  apiPost("/v1/api/verify_recovery_token", {
    recovery_token: body.recoveryToken,
    new_password: body.password,
  });
