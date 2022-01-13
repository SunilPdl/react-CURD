import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow,makeStyles, Button} from '@material-ui/core';
import { getUsers, deleteUser } from '../services/API';

const useStyle = makeStyles({
    table:{
        width:"80%",
        margin:"10px 30px 10px 130px",
    },
    tableHeadCell:{
        '& > *':{
            background:"#000000",
            color:"#FFFFFF",
            fontSize:"20px",
            fontWeight:"300"
        }
    },
    tableBodyCell:{
        '& > *':{
            fontSize:"18px",
        }
    },

    deleteBtn:{
        marginRight:'5px',
        color:"#FFFFFF"
    }
})
const AllUsers = () => {
    const classes = useStyle();
    const[users, setUsers] = useState([]);
    
    useEffect(()=>{
        GetAllUsers();
    },[]);

    const GetAllUsers = async ()=>{
        const resp = await getUsers();
        console.log(resp.data);
        setUsers(resp.data);
    }

    const deleteUserData = async(id)=>{
        await deleteUser(id);
        GetAllUsers();
    }

    return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.tableHeadCell}>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                     users.map(userdata=>(
                        <TableRow className={classes.tableBodyCell}>
                            <TableCell>{userdata.id}</TableCell>
                            <TableCell>{userdata.name}</TableCell>
                            <TableCell>{userdata.username}</TableCell>
                            <TableCell>{userdata.email}</TableCell>
                            <TableCell>{userdata.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' color="secondary" className={classes.deleteBtn} onClick={()=>deleteUserData(userdata.id)} >Delete</Button>
                                <Button variant='contained' color="primary" component={Link} to={`/edit/${userdata.id}`}>Edit</Button>
                            </TableCell>
                        </TableRow>
                     ))
                   }
                </TableBody>
            </Table>
    )
}

export default AllUsers;
