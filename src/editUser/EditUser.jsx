import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router';

import { editUsers, getUsers } from '../services/API';

const useStyle = makeStyles({
    formContainer:{
        width:"40%",
        margin:"18vh auto",
    },

    button:{
        width:"30%",
        margin:"50px 0px 0px 37% ",
    }
})

const initialValues = {
    name:'',
    username:'',
    email:'',
    phone:''
}

const EditUser = () => {
    const classes = useStyle();
    const navigate = useNavigate();
    const {id} = useParams();

    const[user , setUser] = useState(initialValues);
    const {name,username,email,phone} = user;

    const onChangeValue = (e) =>{
        setUser({...user , [e.target.name]:e.target.value});
        console.log(user);
    }

    
    useEffect(() => {
        userLoaders();
    }, [])
    
    const userLoaders =async ()=>{
        const resp = await getUsers(id);
        setUser(resp.data);
    }
    const editUserDetails = async()=>{
        await editUsers(id,user);
        navigate('/');
    }
    return (
        <FormGroup className={classes.formContainer}>
            <FormControl>
                <InputLabel>Name : </InputLabel>
                <Input onChange = {(e)=> onChangeValue(e) } name='name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username : </InputLabel>
                <Input onChange = {(e)=> onChangeValue(e) } name='username' value={username} />
            </FormControl>
            <FormControl>
                <InputLabel>E-mail : </InputLabel>
                <Input onChange = {(e)=> onChangeValue(e) } name='email' value={email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number : </InputLabel>
                <Input onChange = {(e)=> onChangeValue(e) } name='phone' value={phone} />
            </FormControl>

            <Button variant="contained" color="primary" className={classes.button} onClick={()=> editUserDetails()} >Edit User</Button>
        </FormGroup>
    )
}

export default EditUser;;
