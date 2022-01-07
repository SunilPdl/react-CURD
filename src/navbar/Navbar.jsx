import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
const Navbar= () => {
    return (
        <>
          <AppBar>
              <Toolbar>
                <Typography componemt="h2">react-curd</Typography>
                <Typography componemt="h2">all-users</Typography>
                <Typography componemt="h2">add-users</Typography>
              </Toolbar>
          </AppBar>  
        </>
    )
}

export default Navbar;

