import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//get orders by userid
const getOrdersByUserId = async (userId: any) => {
  return http.get<any>(`/api/v1/usersorders/getordersbyuserid/${userId}`);
};
//addresource
const addUsersOrders = async (data: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/usersorders/addusersorders`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  console.log(response);
  return response;
};

const UsersOrdersServices = {
  addUsersOrders,
  getOrdersByUserId,
};

export default UsersOrdersServices;
