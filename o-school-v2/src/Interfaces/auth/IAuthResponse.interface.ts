export interface IAuthResponse {
  csrf: string;
  error: string;
  jwt_access: string;
  refresh_token?: string;
}
