import ApiClient from "@/api/ApiClient";
import { API_ENDPOINT } from "@/constants/api/apiEndpoints";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import {
  Banner,
  BannerShowPlace,
} from "@/types/api/endpointTypes/banner.types";

const api = new ApiClient(API_ENDPOINT.banners);

const bannersApi = {
  get: (params?: { showPlace?: BannerShowPlace }) => {
    return api.get<APIGetTemplate<Banner[]>>("", params);
  },
};

export default bannersApi;
