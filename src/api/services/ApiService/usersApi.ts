import ApiClient from "@/api/ApiClient";
import { API_ENDPOINT } from "@/constants/api/apiEndpoints";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { User, UserEdit } from "@/types/api/endpointTypes/user.types";

const api = new ApiClient(API_ENDPOINT.users);

const usersApi = {
  getProfile: () => {
    return api.get<APIGetTemplate<User>>("/me");
  },
  setProfile: (params?: UserEdit) => {
    return api.put<APIGetTemplate<UserEdit>, UserEdit>("/me", params);
  },
};

export default usersApi;
