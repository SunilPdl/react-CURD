import axios from "axios";

const URL= "http://localhost:3001/users";

export const getUsers = async(id) =>{
    id=id || '';
    return await axios.get(`${URL}/${id}`);
}

export const addUsers = async(user)=>{
    return await axios.post(URL,user);
}
export const editUsers = async(id,user)=>{
    return await axios.put(`${URL}/${id}`,user);
}
export const deleteUser = async(id,user)=>{
    return await axios.delete(`${URL}/${id}`);
}