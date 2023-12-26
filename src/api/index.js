import axios from "axios";

export const ecommerceApi = axios.create({
  baseURL: "http://localhost:5173/",
});
