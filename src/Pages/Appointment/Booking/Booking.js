import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date}) => {
    const {name, time, space} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} md={4} sm={6}>
                <Paper elevation={3} sx={{py:5, }}>
                    <Typography style={{color: "#1BB4B1", fontWeight: 600}} variant="h5" gutterBottom component="div">
                    {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                    {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                </Typography>
                <Button onClick={handleBookingOpen} style={{backgroundColor: "#1BB4B1"}} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
            booking={booking}
            handleBookingClose={handleBookingClose}
            openBooking={openBooking}
            date={date}
            ></BookingModal>
        </>
    );
};

export default Booking;