import ApiClient from "@/api/ApiClient";
import { API_ENDPOINT } from "@/constants/api/apiEndpoints";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { Story } from "@/types/api/endpointTypes/story.types";

const api = new ApiClient(API_ENDPOINT.stories);

const storiesApi = {
  get: (params?: { showPlace: Story["showPlace"] }) => {
    return api.get<APIGetTemplate<Story[]>>("", {
      showPlace: params?.showPlace,
    });
  },
};

export default storiesApi;
