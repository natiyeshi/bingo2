import axios,{ AxiosError as AxiosErrors } from "axios"

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:4000'
export default axios
