import axios from "axios";

const baseURL = `https://fakestoreapi.com/`;
const client = axios.create({ baseURL });

export default client;
