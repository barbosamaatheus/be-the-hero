import axios from "axios";

const api = axios.create({
  baseURL: "https://be-the-hero-api-production.herokuapp.com",
  //baseURL: "http://localhost:3333",
});

export default api;
