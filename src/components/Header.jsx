import React from 'react'

import { AppBar, Box, Toolbar, Typography } from '@mui/material'


const Header = () => {
  return (
    <Box>
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <Typography>
                    AccioJob
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
export default Header