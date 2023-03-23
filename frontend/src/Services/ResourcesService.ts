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

//register
const addResource = async (data: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/resources/addresource`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  console.log(response);
  return response;
};

const ResourcesService = {
  getAllResource,
  getResourceById,
  getResourceByDesignerId,
  addResource,
};

export default ResourcesService;
