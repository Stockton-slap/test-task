import api from "./apiConfig";

export const fetchData = async (url, options = {}) => {
  try {
    const response = await api(url, options);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
