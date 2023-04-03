import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

const getDesignerById = async (id: Number) => {
  return http.get<any>(`/api/v1/designer/getdesignerbyid/${id}`);
};

//updateuser
const UpdateDesigner = async (data: any) => {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/user/updatedesigner`,
      data: data,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user data");
  }
};

//adddesigner
const addDesigner = async (data: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/designer/adddesigner`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  console.log(response);
  return response;
};

const DesignerService = {
  UpdateDesigner,
  getDesignerById,
  addDesigner,
};

export default DesignerService;
