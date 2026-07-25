import { axiosInstance } from "./axios.instance";
// import TokenService from "../services/TokenService";

let isRefreshing = false;

export function setupRequestInterceptor() {

    axiosInstance.interceptors.request.use(
        async (config) => {

            // let token = TokenService.getAccessToken();

            // if (token && TokenService.isExpired(token)) {

            //     if (!isRefreshing) {

            //         isRefreshing = true;

            //         token = await AuthService.refreshToken();

            //         isRefreshing = false;
            //     }
            // }

            // if (token) {
            //     config.headers.Authorization = `Bearer ${token}`;
            // }

            return config;
        }
    );
}