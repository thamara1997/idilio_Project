import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//updateuser
const Update = async (data: any) => {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/user/updateuser`,
      data: data,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user data");
  }
};

const getUserByUserId = async (userId: any) => {
  return await http.get<any>(`/api/v1/user/getuserbyid/${userId}`);
};

const UserService = {
  Update,
  getUserByUserId,
};

export default UserService;
