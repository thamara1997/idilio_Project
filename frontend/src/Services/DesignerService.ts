import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

const getDesignerById = async (id: Number) => {
  return http.get<any>(`/api/v1/designer/getdesignerbyid/${id}`);
};

const ResourcesService = {
  getDesignerById,
};

export default ResourcesService;
