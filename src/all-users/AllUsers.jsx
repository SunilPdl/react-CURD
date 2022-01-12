import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow,makeStyles } from '@material-ui/core';
import { getUsers } from '../services/API';

const useStyle = makeStyles({
    table:{
        width:"80%",
        margin:"50px 30px 10px 130px",
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

    return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.tableHeadCell}>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell>Phone Number</TableCell>
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
                        </TableRow>
                     ))
                   }
                </TableBody>
            </Table>
    )
}

export default AllUsers;
