import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

const getDesignerById = async (id: Number) => {
  return http.get<any>(`/api/v1/designer/get/getdesignerbyid/${id}`);
};

const getDesignersByApprove = async (approved: any) => {
  return http.get<any>(
    `/api/v1/designer/get/getdesignerbyapproved/${approved}`
  );
};

const getDesignersByApproved = async (approved: any) => {
  return http.get<any>(
    `/api/v1/designer/get/getdesignersbyapproved/${approved}`
  );
};

//updateuser
const UpdateDesigner = async (data: any, token: any) => {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/designer/updatedesigner`,
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

//adddesigner
const addDesigner = async (data: any, token: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/designer/adddesigner`,
    data: data,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  return response;
};

const DesignerService = {
  UpdateDesigner,
  getDesignerById,
  addDesigner,
  getDesignersByApprove,
  getDesignersByApproved,
};

export default DesignerService;
