import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { LoginUser, isLoading, user, error} = useAuth()
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        LoginUser(loginData.email, loginData.password, history, location)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:8}} item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    LOGIN
              </Typography>

              {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField onChange={handleOnChange} sx={{width: '75%' , m:1}} id="standard-basic" label="Your Email" name="email" variant="standard" />
                    <TextField onChange={handleOnChange} sx={{width: '75%' , m:1}} id="standard-basic" label="Your Password" type="password"   name="password" variant="standard" />
                    <Button sx={{width: '75%' , m:1}} type="submit" variant="contained">Login</Button>
                    <NavLink to="/register" style={{textDecoration: 'none'}}>
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink>
              </form>}

              {isLoading && <CircularProgress />}
              {user.email && <Alert severity="success">User Login Successfully!</Alert>}
              {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;