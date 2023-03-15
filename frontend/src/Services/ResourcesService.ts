import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

const getAllResource = async () => {
  return http.get<any>(`/api/v1/resources/getallresources`);
};

const getResourceById = async (id: any) => {
  return http.get<any>(`/api/v1/resources/getresourcebyid/${id}`);
};

const getResourceByDesignerId = async (designerId: any) => {
  return http.get<any>(
    `/api/v1/resources/getresourcesbydesignerid/${designerId}`
  );
};

const ResourcesService = {
  getAllResource,
  getResourceById,
  getResourceByDesignerId,
};

export default ResourcesService;
