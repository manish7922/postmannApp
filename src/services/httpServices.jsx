import axios from "axios";
// import axois from "axios";

// const baseURL = "http://localhost:2411";

export const getData = (request) => {
  const { header } = request;
  const config = {
    baseURL: request.baseURL,
    headers: {
      header,
    },
    method: request.method ? request.method : "GET",
    responseType: request.responseType ? request.responseType : "json",
  };
  const newAxios = axios.create(config);
  try {
    const data = newAxios(request.endPoint, request.payload);
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
