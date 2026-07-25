export interface APIGlobalErrorResponse<T = any> {
  success: boolean;
  error: T;
  code?: number;
}