import ApiClient from "@/api/ApiClient";
import { API_ENDPOINT } from "@/constants/api/apiEndpoints";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import {
  AgeRange,
  Occasion,
  OccasionAdd,
  OccasionType,
} from "@/types/api/endpointTypes/occasion.types";

const api = new ApiClient(API_ENDPOINT.occasions);

const occasionsApi = {
  getAgeRanges: () => {
    return api.get<APIGetTemplate<AgeRange[]>>("/age-ranges");
  },
  getOccasionTypes: () => {
    return api.get<APIGetTemplate<OccasionType[]>>("/types");
  },
  getAll: () => {
    return api.get<APIGetTemplate<Occasion[]>>("");
  },
  get: (params?: { id: string }) => {
    return api.get<APIGetTemplate<Occasion>>(`/${params?.id}`);
  },
  add: (data?: OccasionAdd) => {
    return api.post<APIGetTemplate<OccasionAdd>, OccasionAdd>("", data);
  },
  edit: (params?: { data: OccasionAdd; id: string }) => {
    return api.put<APIGetTemplate<Occasion>, OccasionAdd>(
      `/${params?.id}`,
      params?.data,
    );
  },
  //   delete: (params?: { id?: string }) => {
  //     return api.delete<APIGetTemplate<null>>(`/${params?.id}`);
  //   },
};

export default occasionsApi;
