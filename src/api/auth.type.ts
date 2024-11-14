export interface iLoginPayload {
  emailAddress: string;
  password: string;
}

export interface iSignupPayload {
  businessName: string;
  businessPhone: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface iResetPasswordRequestPayload {
  email: string;
}

export interface iCreatePasswordPayload {
  recoveryToken: string;
  password: string;
}
