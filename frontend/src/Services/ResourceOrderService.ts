import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//getResourceOrderBy Id
const getResourceOrderById = async (id: any) => {
  return http.get<any>(`/api/v1/resourceorder/getresourceorderbyid/${id}`);
};

//getResourceOrderBy designerId
const getResourceOrdersByDesignerId = async (designerId: any) => {
  return http.get<any>(
    `/api/v1/resourceorder/getresourceorderbydesignerid/${designerId}`
  );
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

//updateuser
const UpdateResourceOrder = async (data: any) => {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/resourceorder/updateresourceorder`,
      data: data,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user data");
  }
};

const ResourceOrderService = {
  addResourceOrder,
  getResourceOrderById,
  UpdateResourceOrder,
  getResourceOrdersByDesignerId,
};

export default ResourceOrderService;
