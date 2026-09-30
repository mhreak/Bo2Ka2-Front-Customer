import ApiClient from "@/api/ApiClient";
import { API_ENDPOINT } from "@/constants/api/apiEndpoints";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { Banner } from "@/types/api/endpointTypes/banner.types";

const api = new ApiClient(API_ENDPOINT.banners);

const bannersApi = {
  get: () => {
    return api.get<APIGetTemplate<Banner[]>>("");
  },
};

export default bannersApi;
