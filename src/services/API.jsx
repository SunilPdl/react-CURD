import axios from "axios";

const URL= "http://localhost:3001/users";

export const getUsers = async() =>{
    return await axios.get(URL);
}

export const addUsers = async(user)=>{
    return await axios.post(URL,user);
}