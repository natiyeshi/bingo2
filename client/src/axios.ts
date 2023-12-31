import axios from "axios"

axios.defaults.withCredentials = true
const baseURL = "http://localhost:4000";
axios.defaults.baseURL = baseURL
export default axios
