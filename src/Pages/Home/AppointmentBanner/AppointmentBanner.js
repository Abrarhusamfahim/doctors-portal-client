import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';
const appointmentBg = {
  background: `url(${bg})`,
  backgroundColor: 'rgb(48, 76, 78)',
  backgroundBlendMode: 'darken',
  marginTop: '175px'
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
         <img style={{width: "400px", marginTop: '-110px'}} src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6}  sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', justifyContent: 'flex-start' }}>
          <Box>
          <Typography variant="h6" style={{color: '#6AE7F3'}} sx={{mb: 3}}>
              APPOINTMENT
          </Typography>
          <Typography variant="h4" style={{color: 'white'}}>
              Make An Appointment Today
          </Typography>
          <Typography variant="h4" style={{color: 'white', fontSize: '14px', fontWeight: '300'}} sx={{my: 2}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci amet libero repellat, consequuntur reiciendis! Numquam consectetur repudiandae minima possimus?
          </Typography>
          <Button variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
      </Container>
    </Box>
    );
};

export default AppointmentBanner;