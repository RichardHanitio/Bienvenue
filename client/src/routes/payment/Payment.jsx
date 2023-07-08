import React, {useState, useContext, useEffect} from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import { Container, Typography, Box, TextField, FormGroup, FormControlLabel, Checkbox, Button, Divider, Paper } from '@mui/material'
import Grid from "@mui/material/Unstable_Grid2";
import {useTheme} from "@mui/material/styles";
import { ReserveContext } from '../../context/ReserveContext';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Payment = () => {
  const [hasPromoCode, setHasPromoCode] = useState(false);
  const theme = useTheme();
  const {items, date, time, totalGuest, totalPrice, paymentMethod, dispatch} = useContext(ReserveContext);
  const platformFee = 5;
  const taxFee = totalPrice/10;

  const handleChangeHasPromoCode = (e) => {
    console.log(e.target.checked)
    setHasPromoCode(e.target.checked);
  }

  return (
    <>
      <Header />
      <Container fixed sx={{backgroundColor : theme.palette.primary.main, minHeight : "100vh", minWidth : "100vw", display : "flex", flexDirection : "column", alignItems : "center"}}>
        <Grid container sx={{width : {lg : "95%", xl : 1600}, justifyContent : "space-between"}}>
          <Grid md={5}>
            <Box sx={{height : 100, display : "flex", alignItems : "flex-end"}}>
              <Typography sx={{typography : {xxs : "h4", md : "h2"}, color : "white", textAlign : {xxs : "center", md : "start"}}}>Payment Details</Typography>
            </Box>
            <Grid container sx={{flexDirection : "column", height : 400, justifyContent : "center"}}>
              <Box component="form">
                <TextField 
                  margin="normal"
                  label="Card Holder Name"
                  name="card-holder-name"
                  variant="outlined"
                  type="text"
                  size="small"
                  fullWidth
                  required
                  autoFocus
                  sx={{mb : 2}}
                />
                <TextField 
                  margin="normal"
                  label="Credit Card Number"
                  name="credit-card-number"
                  variant="outlined"
                  type="text"
                  size="small"
                  placeholder="xxxx xxxx xxxx xxxx"
                  fullWidth
                  required
                  sx={{mb : 3}}
                />
                <Box component="div" sx={{display : "flex", alignItems : "center", justifyContent : "space-between", mb : 2}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Expiration Date" />
                  </LocalizationProvider>
                  <TextField 
                    margin="normal"
                    label="CVV"
                    name="cvv"
                    variant="outlined"
                    type="number"
                    size="small"
                    placeholder="xxx"
                    required
                  />  
                </Box>
                <FormGroup>
                  <FormControlLabel control={
                    <Checkbox sx={{ 
                    '& .MuiSvgIcon-root': { fontSize: 16 }}}
                    onClick={handleChangeHasPromoCode}
                    />} 
                  label="I have a promo code" sx={{color : "white", 
                  '.MuiFormControlLabel-label' : {fontSize : 14}
                  }}
                  />
                </FormGroup>
                <TextField 
                  margin="normal"
                  label="Promo Code"
                  name="promo-code"
                  variant="outlined"
                  type="text"
                  size="small"
                  sx={{
                    "&:hover input.Mui-disabled" : {
                      border : "none !important"
                    }
                  }}
                  disabled={!hasPromoCode}
                />  
              </Box>
            </Grid>
            <Grid container sx={{flexDirection : "column", height : 300, gap : 3}}>
              <Grid xxs={12} sx={{display : "flex", justifyContent : "space-between"}}>
                <Typography variant="body2" sx={{color : "rgba(255,255,255,.8)"}}>Subtotal</Typography>
                <Typography variant="h4" sx={{color : "white"}}>IDR {totalPrice}k</Typography>
              </Grid>
              <Grid xxs={12} sx={{display : "flex", justifyContent : "space-between"}}>
                <Typography variant="body2" sx={{color : "rgba(255,255,255,.8)"}}>Platform Fee</Typography>
                <Typography variant="h4" sx={{color : "white"}}>IDR {platformFee}k</Typography>
              </Grid>
              <Grid xxs={12} sx={{display : "flex", justifyContent : "space-between"}}>
                <Typography variant="body2" sx={{color : "rgba(255,255,255,.8)"}}>Tax Fee</Typography>
                <Typography variant="h4" sx={{color : "white"}}>IDR {taxFee}k</Typography>
              </Grid>
              <Divider sx={{backgroundColor : "rgba(255,255,255,.5)"}}/>
              <Grid xxs={12} sx={{display : "flex", alignItems : "center",justifyContent : "space-between"}}>
                <Typography variant="body2" sx={{color : "rgba(255,255,255,.8)"}}>Total Amount</Typography>
                <Typography variant="h2" sx={{color : "white"}}>IDR {totalPrice + platformFee + taxFee}k</Typography>
              </Grid>
              <Grid sx={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                <Button variant="contained" color="primary" fullWidth>
                  <Typography variant="body1">Make Payment</Typography>
                </Button>
              </Grid>
            </Grid>  
          </Grid>

          <Grid md={6}>
            <Box component="div" sx={{p : 5}}>
              <Paper elevation={10} sx={{width : "100%", backgroundColor : "rgba(255, 255, 255, 0.3)", display : "flex", alignItems : "flex-start", justifyContent : "center", height : "100%"}}>
                <Box sx={{width : "90%", display : "flex", justifyContent : "center", alignItems : "center", flexDirection : "column", my : 5, gap : 3}}>
                  {
                    items.map((item, index) => (
                      <Grid container key={item._id} sx={{width : "100%", gap : 5}}>
                        <img src={item.img} alt={item.name} style={{width : "130px", height : "80px", borderRadius : "10px", objectFit : "cover"}}/>  
                        <Box component="div" sx={{color : "white", display : "flex", justifyContent : "space-between", alignItems : "center", flex : 1}}>
                          <Typography variant="h5">{item.name} (x{item.amount})</Typography>
                          <Typography variant="body3">IDR {item.price * item.amount}k</Typography>
                        </Box>
                      </Grid>
                    ))
                  }
                  <Divider component="div" sx={{height : 2, width : "100%", backgroundColor : "rgba(255,255,255,.6)", mt : 5, mb : 3}}/>
                  <Box component="div" sx={{color : "white", width : "100%", display : "flex", justifyContent : "space-between"}}>
                    <Typography variant="h4">Total : </Typography>
                    <Typography variant="h4">IDR {totalPrice}k</Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
          
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Payment