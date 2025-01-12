export interface LoginParams {
  credential: string;
  password: string;
}

export interface LoginData {
  accessToken: string;
  fullName: string;
  userId: number;
}
export interface LoginResult {
  data?: LoginData;
  code?: number;
}

export interface User {
  fullName: string;
  userId: number | null;
}

export interface LogoutResult {
  code?: number;
  message?: string;
  data?: null;
}
