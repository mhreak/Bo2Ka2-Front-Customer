import ApiClient from "@/api/ApiClient";
import { API_ENDPOINT } from "@/constants/api/apiEndpoints";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { Setting } from "@/types/api/endpointTypes/setting.types";

const api = new ApiClient(API_ENDPOINT.settings);

const settingsApi = {
  get: (params?: { key: string }) => {
    return api.get<APIGetTemplate<Setting>>(`/${params?.key}`);
  },
};

export default settingsApi;
