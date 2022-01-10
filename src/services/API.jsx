import axios from "axios";

const URL= "http://localhost:3001/users";

export const getUsers = () =>{
    return axios.get(URL);
}