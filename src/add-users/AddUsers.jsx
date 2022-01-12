import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles } from '@material-ui/core';
import React,{useState} from 'react';

import { addUsers } from '../services/API';

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

const AddUsers = () => {
    const classes = useStyle();

    const[user , setUser] = useState(initialValues);
    const {name,username,email,phone} = user;

    const onChangeValue = (e) =>{
        setUser({...user , [e.target.name]:e.target.value});
        console.log(user);
    }

    const addUserDetails = async()=>{
        await addUsers(user);
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

            <Button variant="contained" color="primary" className={classes.button} onClick={()=> addUserDetails() } >Add User</Button>
        </FormGroup>
    )
}

export default AddUsers;;
