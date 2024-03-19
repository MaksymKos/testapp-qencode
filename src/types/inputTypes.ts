import { Errors } from "./errors";

type BasicInputsKeys = {
    [key: string]: string;
}

export interface BasicInputs extends BasicInputsKeys {
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginType = Omit<BasicInputs, "confirmPassword">;

export type ResetType = Omit<BasicInputs, "confirmPassword" | "password">;

export type SetType = Omit<BasicInputs, "email">;

export type FieldsItem = {
  name: string;
  type: string;
  label: string;
  validationHandler: (x: string) => void;
  isHidden?: boolean;
};
