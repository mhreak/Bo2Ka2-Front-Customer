import ApiClient from "@/api/ApiClient";
import { API_ENDPOINT } from "@/constants/api/apiEndpoints";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { Interest } from "@/types/api/endpointTypes/interest.types";

const api = new ApiClient(API_ENDPOINT.interests);

const interestsApi = {
  getAll: (params?: { onlyActive?: boolean }) => {
    return api.get<APIGetTemplate<Interest[]>>("", params);
  },
};

export default interestsApi;
