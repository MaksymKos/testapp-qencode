export type ResponseType = {
  error: number;
  detail: string[];
  timestamp: number;
  access_token: string;
  refresh_token: string;
  token_expire: number;
  refresh_token_expire: number;
};

export type SimpleResponseType = {
  error: number;
  detail: string[];
  timestamp: number;
};