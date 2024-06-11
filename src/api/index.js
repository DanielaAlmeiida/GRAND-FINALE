import axios from "axios";

const baseURL = `http://localhost:3004`;

const apiRequests = axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default apiRequests;
