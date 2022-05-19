import axios from "axios";

export const login = (useremail, password) => {
  return axios({
    method: "post",
    data: {
      username: useremail,
      password: password,
    },
    withCredentials: true,
    url: "http://localhost:3000/auth/login",
  });
};

export const logout = () => {
  return axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:3000/auth/logout",
  });
};

export const getAllColors = () => {
  return axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:3000/gameloby/allColors",
  });
};

export const updateColor = (userID, color) => {
  return axios({
    method: "post",
    data: {
      userID: userID,
      color: color,
    },
    withCredentials: true,
    url: "http://localhost:3000/gameloby/updateColor",
  });
};

export const updatePic = (data, options) => {
  return axios.post("http://localhost:3000/profile/updatePic", data, options);
};
