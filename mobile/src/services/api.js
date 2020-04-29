import axios from "axios";

const api = axios.create({
  baseURL: "https://be-the-hero-api-production.herokuapp.com/",
});

export default api;
