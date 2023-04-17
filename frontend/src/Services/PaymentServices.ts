import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

const getAllPayment = async () => {
  return http.get<any>(`/api/v1/payment/get/getallpaymets`);
};

//addpayment2
const addPayment = async (data: any, token: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/payment/addpayment`,
    data: data,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  return response;
};

//addpayment2
const addPayment2 = async (data: any, token: any) => {
  //console.log(data);
  const response = await axios({
    method: "post",
    url: `${process.env.REACT_APP_BACKEND_SERVER}/api/v1/payment2/addpayment2`,
    data: data,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  return response;
};

const PaymentService = {
  getAllPayment,
  addPayment,
  addPayment2,
};

export default PaymentService;
