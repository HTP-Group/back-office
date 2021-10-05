export interface AuthResponse {
  csrf: string;
  error: string;
  jwt_access: string;
  refresh_token?: string;
}
