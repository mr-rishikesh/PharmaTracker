import axios from "axios"
// this is for the connect to backend api 
export const axiosInstance = axios.create({
    baseURL : "http://localhost:3000",
    withCredentials : true 
})