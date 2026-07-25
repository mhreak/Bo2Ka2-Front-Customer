import ErrorService from "../services/ErrorService/ErrorService";
import { axiosInstance } from "./axios.instance";

export function setupResponseInterceptor() {

    axiosInstance.interceptors.response.use(

        response => response,

        error => {

            return Promise.reject(
                ErrorService.handle(error)
            );

        }

    );

}