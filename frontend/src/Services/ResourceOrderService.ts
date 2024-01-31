import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//getResourceOrderBy Id
const getResourceOrderById = async (id: any) => {
  return http.get<any>(`/api/v1/resourceorder/get/getresourceorderbyid/${id}`);
};

//getResourceOrderBy designerId
const getResourceOrdersByDesignerId = async (designerId: any) => {
  return http.get<any>(
    `/api/v1/resourceorder/get/getresourceorderbydesignerid/${designerId}`
  );
};

//get reviewed ResourceOrder By resourceId
const getResourceReviewByResourceId = async (resourceId: any) => {
  return http.get<any>(
    `/api/v1/resourceorder/get/getresourcereviewbyresourceid/${resourceId}`
  );
};

//addresourceOrder
const addResourceOrder = async (data: any, token: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/resourceorder/addresourceorder`,
    data: data,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  return response;
};

//updateuser
const UpdateResourceOrder = async (data: any, token: any) => {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/resourceorder/updateresourceorder`,
      data: data,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user data");
  }
};

// delete Users Orders
const deleteResourceOrder = async (resourceOrderId: any, token: any) => {
  // return http.delete<any>(
  //   // `/api/v1/resourceorder/deleteresourceorder/${resourceOrderId}`
  // );
  const response = await axios({
    method: "delete",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/resourceorder/deleteresourceorder/${resourceOrderId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

const ResourceOrderService = {
  addResourceOrder,
  getResourceOrderById,
  UpdateResourceOrder,
  getResourceOrdersByDesignerId,
  deleteResourceOrder,
  getResourceReviewByResourceId,
};

export default ResourceOrderService;
