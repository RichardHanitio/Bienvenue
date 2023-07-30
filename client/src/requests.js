import axios from "axios";
import CryptoJS from "crypto-js"

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
axios.defaults.withCredentials = true;
// axios.interceptors.request.use(
//   request => {
//     request.withCredentials = true;
//     return request;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// const encryptData = async(data) => {
//   return CryptoJS.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_SECRET_KEY);
// }

const getUser = () => {
  return (localStorage && localStorage.user) ? localStorage.user : null;
}

const makeRequest = async({url, method="get", body=null, useAuthorization=false}) => {
  const headers = useAuthorization ? {
    Authorization : "Bearer " + getUser()
  } : {};

  let encryptedBody;
  body!==null ? encryptedBody = body : encryptedBody = body;

  const res = await axios({
    url,
    method,
    headers,
    data: encryptedBody
  });        

  return res;
};

const adminMakeRequest = (url) => {

}

export {makeRequest, adminMakeRequest};