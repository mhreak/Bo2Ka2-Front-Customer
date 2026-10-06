import ApiClient from "@/api/ApiClient";
import { API_CONFIG } from "@/config/apiConfig";
import { API_ENDPOINT } from "@/constants/api/apiEndpoints";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import {
  FileUploadData,
  FileUploadResponse,
} from "@/types/api/endpointTypes/files.types";

const client = new ApiClient(API_ENDPOINT.files);

const fileApi = {
  uploadFile: (data?: FileUploadData) => {
    return client.post<APIGetTemplate<FileUploadResponse>, FileUploadData>(
      "/upload",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
};

export default fileApi;
