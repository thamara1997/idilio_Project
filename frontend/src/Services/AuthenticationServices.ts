import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

//login
const loginRequest = async (data: any) => {
  console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/auth/authenticate`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  // alert("Favourite created --- "+ response);
  return response;
};

//register
const Register = async (data: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/auth/register`,
    data: data,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
  console.log(response);
  return response;
};

const AuthService = {
  loginRequest,
  Register,
};

export default AuthService;
