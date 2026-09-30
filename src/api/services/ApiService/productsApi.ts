import ApiClient from "@/api/ApiClient";
import { API_ENDPOINT } from "@/constants/api/apiEndpoints";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import {
  Product,
  ProductParams,
} from "@/types/api/endpointTypes/product.types";

const api = new ApiClient(API_ENDPOINT.products);

const productsApi = {
  getAll: (params?: ProductParams) => {
    return api.get<APIGetTemplate<Product[]>>("", params);
  },
  get: (params?: { id: string }) => {
    return api.get<APIGetTemplate<Product>>(`/${params?.id}`);
  },
};

export default productsApi;
