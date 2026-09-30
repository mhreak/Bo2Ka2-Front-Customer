import { ENV } from "./env";

export const API_CONFIG = {
  baseUrl: ENV.API_BASE_URL,
  prefix: "/api",
  version: "/v1",
  panel: {
    customer: "/customer",
    locations: "/locations",
  },

  get baseURL() {
    return `${this.baseUrl}${this.prefix}${this.version}`;
  },
};
