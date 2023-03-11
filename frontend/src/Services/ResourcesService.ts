import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

const getAllResource = async () => {
  return http.get<any>(`/api/v1/resources/getallresources`);
};

const getResourceById = async (id: any) => {
  return http.get<any>(`/api/v1/resources/getresourcebyid/${id}`);
};

const ResourcesService = {
  getAllResource,
  getResourceById,
};

export default ResourcesService;
