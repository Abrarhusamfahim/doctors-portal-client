import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';
import {Box}  from '@mui/system';

const bgBanner = {
    background: `url(${bg})`
}
const vertical = {
    display: 'flex',
    alignItems: 'center',
    height: '400px'
}
const Banner = () => {
    return (
        <Container style={bgBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{...vertical, textAlign: 'left'}}>
          <Box>
          <Typography variant="h3">
              Your New Smile <br />
              Starts Here
          </Typography>
          <Typography variant="h6" sx={{my:3, fontSize: "12px", color: "gray"}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quis tempora libero omnis odit illo? Ut voluptatibus praesentium necessitatibus ipsum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto ab velit similique cum sunt distinctio rerum facilis doloremque. Quaerat!
          </Typography>
          <Button style={{backgroundColor: "#1BB4B1"}} variant="contained">Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={vertical}>
         <img style={{width: '400px'}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;