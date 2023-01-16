import axios from "axios";
// import axois from "axios";

// const baseURL = "http://localhost:2411";

export const getData = (request) => {
  try {
    const data = axios({
      url: request.url,
      method: request.method ? request.method : "GET",
      data: request.payload,
      headers: request.header,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const getToken = () => {
  try {
    const data = axios.get(
      "https://datastudent.onrender.com/testServer/getToken"
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserData = (token) => {
  try {
    const data = axios(
      "https://datastudent.onrender.com/testServer/testServer/students",
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};
