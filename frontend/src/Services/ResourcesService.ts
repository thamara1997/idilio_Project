import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

const getAllResource = async () => {
  return http.get<any>(`/api/v1/resources/getallresources`);
  // console.log(response.data);
  // var config = {
  //   method: "get",
  //   url: "http://localhost:8080/api/v1/resources/getallresources",
  // };
  // axios(config)
  //   .then(function (response) {
  //     console.log(response.data);
  //     return response.data;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
};

const ResourcesService = {
  getAllResource,
};

export default ResourcesService;
