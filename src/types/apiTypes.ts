export type LoginUserType = {
  email: string;
  password: string;
};

export type ResetUserPasswordType = {
  email: string,
}

export type NewUserPasswordType = {
  token: string;
  secret: string;
  password: string;
  password_confirm: string;
};

export type RefreshUserTokenType = {
  refresh_token: string;
};

export type AccessUserTokenType = {
  access_id: string;
};
