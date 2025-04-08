import axios from "axios";

const getBaseURL = (port: 8080 | 8081) => `http://localhost:${port}/`;

export const createApiInstance = (port: 8080 | 8081) => {
  return axios.create({
    baseURL: getBaseURL(port),
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
