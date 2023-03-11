import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

const getAllPackages = async () => {
  return http.get<any>(`/api/v1/package/getallpackages`);
};

const getPackageById = async (id: any) => {
  return http.get<any>(`/api/v1/package/getpackagebyid/${id}`);
};

const ResourcesService = {
  getAllPackages,
  getPackageById,
};

export default ResourcesService;
