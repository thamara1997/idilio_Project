import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

// convert Base64 string to file
const convertBase64ToFile = (base64String: any, filename: any) => {
  const arr = base64String.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

//get profile pic by id
const getProfilePicture = async (userId: any) => {
  return http.get<any>(`/api/v1/upload/profilePic/${userId}`);
};

//get resource art by id
const getResourceArt = async (resourceId: any) => {
  return http.get<any>(`/api/v1/upload/resourceArt/${resourceId}`);
};

//get resource order drawing by id
const getResourceOrderDrawing = async (resourceOrderId: any) => {
  return http.get<any>(
    `/api/v1/upload/resourceorderdrawing/${resourceOrderId}`
  );
};

//get resource order drawing by id
const getResourceOrderWork = async (resourceOrderId: any) => {
  return http.get<any>(`/api/v1/upload/resourceorderwork/${resourceOrderId}`);
};

//get new order drawing by id
const getNewOrderDrawing = async (newOrderId: any) => {
  return http.get<any>(`/api/v1/upload/neworderdrawing/${newOrderId}`);
};

//get new order drawing by id
const getNewOrderWork = async (newOrderId: any) => {
  return http.get<any>(`/api/v1/upload/neworderwork/${newOrderId}`);
};

// upload profile picture
const uploadProfilePicture = async (userId: any, formData: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/uploadprofilepic/${userId}`,
    data: formData,
    headers: {},
  });
  return response;
};

// upload Resource Art
const uploadResourceArt = async (resourceId: any, formData: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/uploadresourceart/${resourceId}`,
    data: formData,
    headers: {},
  });
  return response;
};

// upload Resource Order Drawing
const uploadResourceOrderDrawing = async (
  resourceOrderId: any,
  formData: any
) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/uploadresourceorderdrawing/${resourceOrderId}`,
    data: formData,
    headers: {},
  });
  return response;
};

// upload New Order Drawing
const uploadNewOrderDrawing = async (newOrderId: any, formData: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/uploadneworderdrawing/${newOrderId}`,
    data: formData,
    headers: {},
  });
  return response;
};

// upload Resource Order Work
const uploadResourceOrderWork = async (resourceOrderId: any, formData: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/uploadresourceorderwork/${resourceOrderId}`,
    data: formData,
    headers: {},
  });
  return response;
};

// upload new Order Work
const uploadNewOrderWork = async (newOrderId: any, formData: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/uploadneworderwork/${newOrderId}`,
    data: formData,
    headers: {},
  });
  return response;
};

// upload CV
const uploadCv = async (designerId: any, formData: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/uploadcv/${designerId}`,
    data: formData,
    headers: {},
  });
  return response;
};

//multi files
// get new order attavhments names
const getNewOrderAttachments = async (newOrderId: any) => {
  return http.get<any>(
    `${process.env.REACT_APP_BACKEND_SERVER}/upload/neworderfiles/${newOrderId}`
  );
};

// upload service logo
const uploadNewOrderAttachments = async (newOrderId: any, formData: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/upload/uploadneworderfiles/${newOrderId}`,
    data: formData,
    headers: {},
  });
  return response;
};

// get new order attavhments names
const getResourceOrderAttachments = async (resourceOrderId: any) => {
  return http.get<any>(
    `${process.env.REACT_APP_BACKEND_SERVER}/upload/resourceorderfiles/${resourceOrderId}`
  );
};

// upload service logo
const uploadResourceOrderAttachments = async (
  resourceOrderId: any,
  formData: any
) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/upload/uploadresourceorderfiles/${resourceOrderId}`,
    data: formData,
    headers: {},
  });
  return response;
};

const FileUploadServices = {
  getProfilePicture,
  convertBase64ToFile,
  uploadProfilePicture,
  getResourceArt,
  uploadResourceArt,
  uploadResourceOrderDrawing,
  getResourceOrderDrawing,
  getResourceOrderWork,
  uploadNewOrderDrawing,
  getNewOrderDrawing,
  getNewOrderWork,
  uploadResourceOrderWork,
  uploadNewOrderWork,
  uploadCv,
  getNewOrderAttachments,
  uploadNewOrderAttachments,
  getResourceOrderAttachments,
  uploadResourceOrderAttachments,
};

export default FileUploadServices;
