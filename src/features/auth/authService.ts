import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const LOGIN_URL = BASE_URL + "/users/v1/login/";
const PROFILE_URL = BASE_URL + "/users/v1/me/";

const login = async (userData: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log(process.env.REACT_APP_BASE_URL + "/users/v1/login/", LOGIN_URL);

  const response = await axios.post(
    "http://localhost:8000/users/v1/login/",
    userData,
    config
  );

  if (response.data) {
    localStorage.setItem("blog-cms-token", response.data.token);
  }
  return response.data;
};

const profile = async (token: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  };

  const response = await axios.get(PROFILE_URL, config);
  console.log("profile res", response.data);
  // if (response.data) {
  //   localStorage.setItem("token", response.data.token);
  // }
  return response.data;
};

// const logout = async (token: any) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Token ${token}`,
//     },
//   };

//   const response = await axios.get(PROFILE_URL, config);
//   console.log("profile res", response.data);
//   // if (response.data) {
//   //   localStorage.setItem("token", response.data.token);
//   // }
//   return response.data;
// };

const authAPIService = { login, profile };
export default authAPIService;
