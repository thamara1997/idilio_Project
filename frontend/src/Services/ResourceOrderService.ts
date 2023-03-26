import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//getResourceOrderBy Id
const getResourceOrderById = async (id: any) => {
  return http.get<any>(`/api/v1/resourceorder/getresourceorderbyid/${id}`);
};

//addresourceOrder
const addResourceOrder = async (data: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/resourceorder/addresourceorder`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  console.log(response);
  return response;
};

const ResourceOrderService = {
  addResourceOrder,
  getResourceOrderById,
};

export default ResourceOrderService;
