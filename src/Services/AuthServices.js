import axios from 'axios'
const baseUrl = process.env.REACT_BASEURL

const registeruser = (data) =>{
    return axios.post(`${baseUrl}/user/register`,data)
};

const loginUser = (data) =>{
    return axios.post(`${baseUrl}/user/login`,data)
};

const AuthServices = {registeruser,loginUser}
export default AuthServices;