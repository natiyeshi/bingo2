import axios from "axios"

axios.defaults.withCredentials = true
const baseURL = window.location.origin;
axios.defaults.baseURL = baseURL
export default axios
