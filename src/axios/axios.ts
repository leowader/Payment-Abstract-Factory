import axios from "axios";

const getBaseURL = (port: 8080 | 8081 | 8082) => `http://localhost:${port}/`;

export const createApiInstance = (port: 8080 | 8081 | 8082) => {
  return axios.create({
    baseURL: getBaseURL(port),
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
