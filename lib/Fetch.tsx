import axios from "axios";

export const instance = axios.create({
  baseURL: "https://673896744eb22e24fca85fc4.mockapi.io/product",
  timeout: 1000,
});
