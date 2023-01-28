import axios from "axios";
import {BACKEND_URL} from "../constant/URL";

const axiosBackend = axios.create({baseURL: BACKEND_URL});


export default axiosBackend;