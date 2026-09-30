import ApiClient from "@/api/ApiClient";
import { API_ENDPOINT } from "@/constants/api/apiEndpoints";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { Banner } from "@/types/api/endpointTypes/banner.types";
import { ProductCategory } from "@/types/api/endpointTypes/productCategory.types";

const api = new ApiClient(API_ENDPOINT.productCategories);

const productCategoriesApi = {
  getAll: (params?: { asTree: boolean }) => {
    return api.get<APIGetTemplate<ProductCategory[]>>("", {
      asTree: params?.asTree,
    });
  },
  get: (params?: { id: string }) => {
    return api.get<APIGetTemplate<ProductCategory>>(`/${params?.id}`);
  },
};

export default productCategoriesApi;
