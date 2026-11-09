import ApiClient from "@/api/ApiClient";
import { API_ENDPOINT } from "@/constants/api/apiEndpoints";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { Job } from "@/types/api/endpointTypes/job.types";

const api = new ApiClient(API_ENDPOINT.jobs);

const jobsApi = {
  getAll: (params?: { onlyActive?: boolean }) => {
    return api.get<APIGetTemplate<Job[]>>("", params);
  },
};

export default jobsApi;
