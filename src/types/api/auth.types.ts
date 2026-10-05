export interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
  roles: string[];
  token?: string;
}

export interface LoginByPasswordDto {
  username: string;
  password: string;
}
export interface LoginOtpDto {
  mobile: string;
  code: string;
}

export interface LoginResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    expiresAt: string;
    isProfileCompleted: boolean;
    isNewUser: boolean;
  };
}

export interface RefreshTokenResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    expiresAt: string;
    isProfileCompleted: boolean;
  };
}

export interface SendOtpDto {
  mobile: string;
}

export interface SendOtpResponse {
  code?: number | string | null;
  expiresIn: number;
}
