import axios from "axios";

const baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
