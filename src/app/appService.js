import axios from "axios";
import { BASE_URL } from "./config";

const appService = axios.create({
  baseURL: BASE_URL,
});

appService.interceptors.request.use(
  (request) => {
    console.log("start request", request);
    return request;
  },
  (err) => {
    console.log("request Error", err);
    return Promise.reject(err);
  }
);

appService.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response;
  },
  (err) => {
    console.log("response Error", err);
    return Promise.reject(err.response.data.errors);
  }
);

export default appService;
