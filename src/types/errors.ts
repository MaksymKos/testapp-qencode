type ErrorsKeys = {
  [key: string]: string | undefined;
};

export interface Errors extends ErrorsKeys {
  email?: string;
  password?: string;
  currentPassword?: string;
}
