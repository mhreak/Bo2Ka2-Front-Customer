import ApiClient from "@/api/ApiClient";
import { API_ENDPOINT } from "@/constants/api/apiEndpoints";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import {
  Shop,
  ShopGet,
  ShopParams,
} from "@/types/api/endpointTypes/shop.types";

const api = new ApiClient(API_ENDPOINT.shops);

const shopsApi = {
  getAll: (params?: ShopParams) => {
    return api.get<APIGetTemplate<Shop[]>>("", params);
  },
  get: (params?: { id?: string }) => {
    return api.get<APIGetTemplate<ShopGet>>(`/${params?.id}`);
  },
};

export default shopsApi;
