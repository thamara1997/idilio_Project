import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//get orders by userid
const getOrdersByUserId = async (userId: any) => {
  return http.get<any>(`/api/v1/usersorders/get/getordersbyuserid/${userId}`);
};

//get users orders by resource Order id
const getUsersOrdersByResourceOrderId = async (resourceOrderId: any) => {
  return http.get<any>(
    `/api/v1/usersorders/get/getusersordersbyresourceorderid/${resourceOrderId}`
  );
};
//addresource
const addUsersOrders = async (data: any, token: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/usersorders/addusersorders`,
    data: data,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  return response;
};

// delete Users Orders
const deleteUsersOrders = async (resourceOrderId: any, token: any) => {
  // return http.delete<any>(
  //   `/api/v1/usersorders/deleteusersordersbyreourceid/${resourceOrderId}`
  // );
  const response = await axios({
    method: "delete",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/usersorders/deleteusersordersbyreourceid/${resourceOrderId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

const UsersOrdersServices = {
  addUsersOrders,
  getOrdersByUserId,
  getUsersOrdersByResourceOrderId,
  deleteUsersOrders,
};

export default UsersOrdersServices;
