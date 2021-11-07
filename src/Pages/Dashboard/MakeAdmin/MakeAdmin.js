import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const HandleOnBlur = e =>{
       setEmail(e.target.value);
    }
    const HandleAdminSubmit = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data)
                setSuccess(true);
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h1>This is make Admin</h1>
            <form onSubmit={HandleAdminSubmit}>
                <TextField
                sx={{width: '50%', mb:3}}
                label="Email"
                type="email"
                onBlur={HandleOnBlur}
                variant="standard"
                /> <br/>
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;