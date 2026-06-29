import axios from "axios";

const API_URL = "http://localhost:8000/account/"; //auth urls

export const register = async (userData) => {
  return await axios.post(API_URL+"/register/", userData);
};

// export const login = async (userData) => {
//   const res = await axios.post(API_URL+"login/", userData);
//   if (res.data.token) {
//     localStorage.setItem("token", res.data.token);
//   }
//   return res.data;
// };

// export const logout = () => {
//   localStorage.removeItem("token");
// };
