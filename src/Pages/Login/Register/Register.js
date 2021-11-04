import { Container, Grid, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';
const Register = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:8}} item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    LOGIN
              </Typography>
              <form onSubmit={handleLoginSubmit}>
                    <TextField onChange={handleOnChange} sx={{width: '75%' , m:1}} id="standard-basic" label="Your Email" name="email" variant="standard" />
                    <TextField onChange={handleOnChange} sx={{width: '75%' , m:1}} id="standard-basic" label="Your Password" type="password"   name="password" variant="standard" />
                    <Button sx={{width: '75%' , m:1}} type="submit" variant="contained">Login</Button>
                    <NavLink to="/login" style={{textDecoration: 'none'}}>
                        <Button variant="text">Already Registered? Please Login</Button>
                    </NavLink>
              </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;