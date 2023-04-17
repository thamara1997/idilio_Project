import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

const getAllResource = async () => {
  return http.get<any>(`/api/v1/resources/get/getallresources`);
};

const getResourceById = async (id: any) => {
  return http.get<any>(`/api/v1/resources/get/getresourcebyid/${id}`);
};

const getResourceByDesignerId = async (designerId: any) => {
  return http.get<any>(
    `/api/v1/resources/get/getresourcesbydesignerid/${designerId}`
  );
};

//addresource
const addResource = async (data: any, token: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/resources/addresource`,
    data: data,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  return response;
};

//updateresource
const UpdateResource = async (data: any, token: any) => {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/resources/updateresource`,
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

// delete resource
const deleteResource = async (resourceId: any, token: any) => {
  // return http.delete<any>(`/api/v1/resources/deleteresource/${resourceId}`);
  const response = await axios({
    method: "delete",
    url: `${process.env.REACT_APP_BACKEND_SERVER}//api/v1/resources/deleteresource/${resourceId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

const ResourcesService = {
  getAllResource,
  getResourceById,
  getResourceByDesignerId,
  addResource,
  UpdateResource,
  deleteResource,
};

export default ResourcesService;
