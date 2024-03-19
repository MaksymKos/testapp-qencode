import axios from "axios";
import {
  loginUserPath,
  resetUserPasswordPath,
  setNewUserPasswordPath,
  refreshUserTokenPath,
  accessUserTokenPath,
} from "../utils/constants";
import {
  AccessUserTokenType,
  LoginUserType,
  NewUserPasswordType,
  RefreshUserTokenType,
} from "../types/apiTypes";

export async function loginUser({ email, password }: LoginUserType) {
  const { data } = await axios.post(loginUserPath, {
    email,
    password,
  });
  return data;
}

export async function resetUserPassword(email: string) {
  const { data } = await axios.post(resetUserPasswordPath, {
    email,
    redirect_url: `${process.env.REACT_APP_BASE_URL}#/newpass`,
  });

  return data;
}

export async function setNewUserPassword({
  token,
  secret,
  password,
  password_confirm,
}: NewUserPasswordType) {
  const { data } = await axios.post(setNewUserPasswordPath, {
    token,
    secret,
    password,
    password_confirm,
  });

  return data;
}

export async function refreshUserToken(refresh_token: RefreshUserTokenType) {
  const { data } = await axios.post(refreshUserTokenPath, {
    refresh_token,
  });

  return data;
}

export async function accessUserToken(access_id: AccessUserTokenType) {
  const { data } = await axios.post(accessUserTokenPath, {
    access_id,
  });

  return data;
}
