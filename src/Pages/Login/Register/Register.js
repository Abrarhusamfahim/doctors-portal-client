import { Container, Grid, TextField, Typography, Button, Alert } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser, isLoading, user, error} = useAuth()
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert("Your password did not matched!!")
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:8}} item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                    REGISTER
              </Typography>
              {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField 
                        onChange={handleOnChange} 
                        sx={{width: '75%' , m:1}} 
                        id="standard-basic" 
                        label="Your Email" 
                        name="email" 
                        type="email"
                        variant="standard" />
                    <TextField 
                        onChange={handleOnChange} 
                        sx={{width: '75%' , m:1}} 
                        id="standard-basic" 
                        label="Your Password" 
                        type="password" 
                        name="password" 
                        variant="standard" />
                    <TextField 
                        onChange={handleOnChange} 
                        sx={{width: '75%' , m:1}} 
                        id="standard-basic" 
                        label="Confirm Your Password" 
                        type="password2" 
                        name="password2" 
                        variant="standard" />


                    <Button sx={{width: '75%' , m:1}} type="submit" variant="contained">Register</Button>
                    <NavLink to="/login" style={{textDecoration: 'none'}}>
                        <Button variant="text">Already Registered? Please Login</Button>
                    </NavLink>
              </form>}
              
              {/* spinner */}
              {isLoading && <CircularProgress />}
              {/* alert */}
              {user.email && <Alert severity="success">User Created Successfully!</Alert>}
              {/* error */}
              {error && <Alert severity="error">{error}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;