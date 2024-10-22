import React from 'react';
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const navigate = useNavigate();

    const clearUser = () => {
      localStorage.removeItem('token');
      navigate('/'); // Redirect to home after logout
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#FFDAB9' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Employee App
                    </Typography>
                    <Stack spacing={2} direction="row">
                        <Link to={'/home'}>
                            <Button color="inherit" variant='contained'>HOME</Button>
                        </Link>
                        <Link to={'/add'}>
                            <Button color="inherit" variant='contained'>ADD</Button>
                        </Link>
                        <Button color="inherit" variant='contained' onClick={clearUser}>Logout</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
