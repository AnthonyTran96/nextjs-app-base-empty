export interface LoginParams {
  credential: string;
  password: string;
}

export interface LoginResult {
  accessToken: string;
  fullName: string;
  userId: number;
}

export interface User {
  fullName: string;
  userId: number | null;
}
