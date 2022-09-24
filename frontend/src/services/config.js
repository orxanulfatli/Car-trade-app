import axios from "axios";
import { API_URL } from "./service.constants";
import { loadState, saveState } from "../utils/localStorage";
import { checkAuth } from "./authService";
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use(
  (config) => {
    const token = loadState("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => console.log(error)
);

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await checkAuth();
        saveState("token", response.data.accessToken);
        return $api.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
    throw error;
  }
);

export default $api;
