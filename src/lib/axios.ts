import config from "@/config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Axios Request:", config);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Axios Response:", response);
    return response;
  },
  (error) => {
    if (
      error.response?.status === 403 &&
      error.config.url?.includes("/user/me")
    ) {
      return Promise.resolve({ data: null });
    }
    return Promise.reject(error);
  }
);
