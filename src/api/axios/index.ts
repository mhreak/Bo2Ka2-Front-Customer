import { axiosInstance } from "./axios.instance";
import { setupRequestInterceptor } from "./request.interceptor";
import { setupResponseInterceptor } from "./response.interceptor";

setupRequestInterceptor();

setupResponseInterceptor();

export default axiosInstance;