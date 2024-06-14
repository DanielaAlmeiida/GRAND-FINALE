import axios from "axios";

const baseURL = `http://20.197.231.134:3000/`;

const apiRequests = axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default apiRequests;
