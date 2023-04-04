import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

const getNewOrderById = async (newOrderId: any) => {
  return http.get<any>(`/api/v1/neworder/getneworderbyid/${newOrderId}`);
};

const getNewOrderByDesignerId = async (designerId: any) => {
  return http.get<any>(
    `/api/v1/neworder/getneworderbydesignerid/${designerId}`
  );
};

const getNewOrderByUserId = async (userId: any) => {
  return http.get<any>(`/api/v1/neworder/getneworderbyuserid/${userId}`);
};

//addnewOrder
const addNewOrder = async (data: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/neworder/addneworder`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  console.log(response);
  return response;
};

//updateuser
const UpdateNewOrder = async (data: any) => {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/neworder/updateneworder`,
      data: data,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update new order data");
  }
};

// delete new Order
const deleteNewOrder = async (newOrderId: any) => {
  return http.delete<any>(`/api/v1/neworder/deleteneworder/${newOrderId}`);
};

const NewOrderServices = {
  addNewOrder,
  getNewOrderByDesignerId,
  getNewOrderByUserId,
  getNewOrderById,
  UpdateNewOrder,
  deleteNewOrder,
};

export default NewOrderServices;
