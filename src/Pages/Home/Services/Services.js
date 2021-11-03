import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import teeth from '../../../images/whitening.png'
const services = [
  {
      name: "Fluoride Treatment",
      description: "Our Mission is to Provide a Consistently Reliable, High Quality, & Safe Patient Experience. At UPMC, We Are Making Life Changing Medicine Happen. Learn More & Contact Us Today.",
      img: fluoride
  },
  {
      name: "Cavity Filling",
      description: "Our Mission is to Provide a Consistently Reliable, High Quality, & Safe Patient Experience. At UPMC, We Are Making Life Changing Medicine Happen. Learn More & Contact Us Today.",
      img: cavity
  },
  {
      name: "Teeth Whitenting",
      description: "Our Mission is to Provide a Consistently Reliable, High Quality, & Safe Patient Experience. At UPMC, We Are Making Life Changing Medicine Happen. Learn More & Contact Us Today.",
      img: teeth
  },
]

const Services = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography sx={{ fontWeight: 500,  color: '#1BB4B1', m: 2 }} variant="h6" component="div">
              OUR SERVICES
         </Typography>
        <Typography sx={{ fontWeight: 600, mb: 5}} variant="h4" component="div">
              Services We Provide
         </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           {
             services.map(service => <Service key={service.name} service={service}></Service>)
           }
        </Grid>
      </Container>
    </Box>
    );
};

export default Services;