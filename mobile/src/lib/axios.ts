import axios from "axios";

export const api = axios.create({
  baseURL: 'http://172.16.0.161:3333'
});