import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//get profile pic by id
const getProfilePicture = async (userId: any) => {
  return http.get<any>(
    `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/upload/profilePic/${userId}`
  );
};

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

const FileUploadServices = {
  getProfilePicture,
  convertBase64ToFile,
  uploadProfilePicture,
};

export default FileUploadServices;
