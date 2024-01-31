import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

const getAllPackages = async () => {
  return http.get<any>(`/api/v1/package/get/getallpackages`);
};

const getPackageById = async (id: any) => {
  return http.get<any>(`/api/v1/package/get/getpackagebyid/${id}`);
};

const PackageService = {
  getAllPackages,
  getPackageById,
};

export default PackageService;
