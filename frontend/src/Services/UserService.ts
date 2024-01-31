import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//updateuser
const Update = async (data: any, token: any) => {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/user/updateuser`,
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

const getUserByUserId = async (userId: any) => {
  return await http.get<any>(`/api/v1/user/get/getuserbyid/${userId}`);
};

// delete user
const deleteUser = async (userId: any, token: any) => {
  // return http.delete<any>(`/api/v1/user/deleteuser/${userId}`);
  const response = await axios({
    method: "delete",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/user/deleteuser/${userId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

const UserService = {
  Update,
  getUserByUserId,
  deleteUser,
};

export default UserService;
