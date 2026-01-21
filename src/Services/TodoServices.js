import axios from "axios";
// get user token 
const user=JSON.parse(localStorage.getItem('mern3Todo'))

// default aurh header
axios.defaults.headers.common['Authorization']=`bearer ${user.token}`


const baseUrl = process.env.REACT_BASEURL
// create todo
const createTodo = (data)  =>{
    return axios.post(`${baseUrl}/todo/create'`,data)
}
// getall  todo
const getAllTodo = (id)  =>{
    return axios.post(`${baseUrl}/todo/getAll/${id}`);
}

// update todo
const updateTodo = (id,data)  =>{
    return axios.patch(`${baseUrl}/todo/update/`+id,data);
}

// delete todo

const deleteTodo = (id) =>{
    return axios.delete(`${baseUrl}/todo/delete/`+id)
}
const TodoServices = {createTodo, getAllTodo,updateTodo,deleteTodo}
export default TodoServices;