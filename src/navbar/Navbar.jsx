import React from 'react';

import { AppBar, Toolbar, Typography,makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
  header:{
        background:"blue"
  },
  navItemGap:{
    gap:"20vw"
  },
  h1:{
    color:"orange",
    fontSize:"30px",
    textTransform:"uppercase"
  },
  navlink:{
    color:"#FFFFFF",
    fontSize:"30px",
    textDecoration:"none"
  }
})
const Navbar= () => {
  const classes = useStyle();
    return (
        <>
          <AppBar className={classes.header} position='static'>
              <Toolbar className={classes.navItemGap}>
                <Typography className={classes.h1} componemt="h1">react-curd</Typography>
                <NavLink className={classes.navlink} to='/'>all-users</NavLink>
                <NavLink className={classes.navlink} to='/add'>add-users</NavLink>
              </Toolbar>
          </AppBar>  
        </>
    )
}

export default Navbar;

