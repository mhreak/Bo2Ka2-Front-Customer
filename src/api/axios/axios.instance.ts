import { ENV } from "@/config/env";
import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: ENV.API_BASE_URL,

  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },
});
