import HttpService from "@/api/services/HttpService";
import TokenService from "./TokenService";
import { API_CONFIG } from "@/config/apiConfig";
import {
  LoginByPasswordDto,
  LoginOtpDto,
  LoginResponse,
  RefreshTokenResponse,
  SendOtpDto,
  SendOtpResponse,
} from "@/types/api/auth.types";
import { APIGetTemplate } from "@/types/api/commonApiTypes";

class AuthService {
  async loginOtp(data: LoginOtpDto): Promise<void> {
    const response = await HttpService.post<LoginResponse, LoginOtpDto>(
      `/auth/submit-otp-general`,
      data,
    );

    const { accessToken, refreshToken, expiresAt } = response.data;

    TokenService.setAccessToken(accessToken);
    TokenService.setRefreshToken(refreshToken);
    TokenService.setExpiresAt(expiresAt);
  }

  async loginByPassword(data: LoginByPasswordDto): Promise<void> {
    const response = await HttpService.post<LoginResponse, LoginByPasswordDto>(
      `/auth/login-by-password`,
      data,
    );

    const { accessToken, refreshToken, expiresAt } = response.data;

    TokenService.setAccessToken(accessToken);
    TokenService.setRefreshToken(refreshToken);
    TokenService.setExpiresAt(expiresAt);
  }

  async sendOtpGeneral(
    data: SendOtpDto,
  ): Promise<APIGetTemplate<SendOtpResponse>> {
    const response = await HttpService.post<
      APIGetTemplate<SendOtpResponse>,
      SendOtpDto
    >(`/auth/send-otp-general`, data);
    return response;
  }
  async registerSendOtp(
    data: SendOtpDto,
  ): Promise<APIGetTemplate<SendOtpResponse>> {
    const response = await HttpService.post<
      APIGetTemplate<SendOtpResponse>,
      SendOtpDto
    >(`/auth/register-send-otp`, data);
    return response;
  }

  async refreshToken(): Promise<string> {
    const refreshToken = TokenService.getRefreshToken();

    if (!refreshToken) {
      throw new Error("Refresh token not found");
    }

    const response = await HttpService.post<
      RefreshTokenResponse,
      { refreshToken: string }
    >(`${API_CONFIG.panel.customer}/auth/refresh-token`, {
      refreshToken,
    });

    const {
      accessToken,
      refreshToken: newRefreshToken,
      expiresAt,
    } = response.data;

    TokenService.setAccessToken(accessToken);
    TokenService.setExpiresAt(expiresAt);

    if (newRefreshToken) {
      TokenService.setRefreshToken(newRefreshToken);
    }

    return accessToken;
  }

  async logout(): Promise<void> {
    TokenService.clearTokens();
  }
}

export default new AuthService();
