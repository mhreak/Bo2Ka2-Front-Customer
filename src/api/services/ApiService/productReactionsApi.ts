import ApiClient from "@/api/ApiClient";
import { API_ENDPOINT } from "@/constants/api/apiEndpoints";
import { Product } from "@/types/api/endpointTypes/product.types";

const api = new ApiClient(API_ENDPOINT.products);

const productReactionsApi = {
  like: (params?: { productId: string }) => {
    return api.post<Product>(`/${params?.productId}/like/toggle`);
  },
};

export default productReactionsApi;
