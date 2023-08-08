import React, {useState, useEffect, useRef} from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import { Container, Typography, Box, TextField, FormGroup, FormControlLabel, Checkbox, Button, Divider, Paper } from '@mui/material'
import Grid from "@mui/material/Unstable_Grid2";
import {useTheme} from "@mui/material/styles";
import { useLocation } from "react-router-dom"
import { makeRequest, decryptData } from '../../requests';
import { useNavigate } from 'react-router-dom';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs"

import CryptoJS from "crypto-js"

const Payment = () => {
  const [hasPromoCode, setHasPromoCode] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const [query, setQuery] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({});

  const [loading, setLoading] = useState(true)
  
  const [bankCredentials, setBankCredentials] = useState({
    method : "bank",
    status : "pending",
    cardHolderName : "",
    creditCardNumber : "",
    expirationDate : dayjs(),
    paymentDateTime : new Date(),
    cvv : ""
  })

  const handleCredentialChange = (e) => {
    setBankCredentials({
      ...bankCredentials,
      [e.target.name] : e.target.value,
    })
  }

  const taxFee = useRef(0);
  const platformFee = 5;

  const handleSetQuery = () => {
    const newQueries = location.search.slice(1).split("&");
    newQueries.forEach(query => {
      const splitString = query.split("=")
      const key = splitString[0];
      const value = splitString[1];
      setQuery(q => Object.assign(q, {[key] : value}));
    })
  }

  const handleFetchData = async() => {
    try {
      const url = `/payments/${decryptData(query.paymentId).slice(1, -1)}`;
      const resp = await makeRequest({url});
      setPaymentDetails(resp.data.data)
      setLoading(false)
    } catch (err) {
    }
  }

  const handleSubmit = async() => {
    try {
      const paymentResp = await makeRequest({url : `/payments/${decryptData(query.paymentId).slice(1, -1)}/edit`, method : "patch", body : bankCredentials})
      console.log(paymentResp)
      navigate("/history")
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleSetQuery();
  }, [location])

  useEffect(() => {
    handleFetchData();
  }, [loading])

  useEffect(() => {
    if(!loading) taxFee.current = paymentDetails.reservation.totalPrice/10;
  }, [paymentDetails, loading])


  const handleChangeHasPromoCode = (e) => {
    console.log(e.target.checked)
    setHasPromoCode(e.target.checked);
  }

  return (
    <>
      <Header />
      <Container fixed sx={{backgroundColor : theme.palette.primary.main, minHeight : "100vh", minWidth : "100vw", display : "flex", flexDirection : "column", alignItems : "center"}}>
        {
          !loading && (
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
                      name="cardHolderName"
                      variant="outlined"
                      type="text"
                      size="small"
                      fullWidth
                      required
                      autoFocus
                      value={bankCredentials.cardHolderName}
                      onChange={handleCredentialChange}
                      sx={{mb : 2}}
                    />
                    <TextField 
                      margin="normal"
                      label="Credit Card Number"
                      name="creditCardNumber"
                      variant="outlined"
                      type="text"
                      size="small"
                      placeholder="xxxx xxxx xxxx xxxx"
                      fullWidth
                      required
                      value={bankCredentials.creditCardNumber}
                      onChange={handleCredentialChange}
                      sx={{mb : 3}}
                    />
                    <Box component="div" sx={{display : "flex", alignItems : "center", justifyContent : "space-between", mb : 2}}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                          label="Expiration Date" 
                          value={bankCredentials.expirationDate}
                          onChange={(date) => setBankCredentials({
                            ...bankCredentials,
                            expirationDate : new Date(date.$d).toISOString()
                          })}
                        />
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
                        value={bankCredentials.cvv}
                        onChange={handleCredentialChange}
                      />  
                    </Box>
                    <FormGroup>
                      <FormControlLabel control={
                        <Checkbox sx={{ 
                        '& .MuiSvgIcon-root': { fontSize: 16 },
                        }}
                        onClick={handleChangeHasPromoCode}
                        />} 
                        label="I have a promo code" 
                        sx={{
                          color : "white", 
                          '.MuiFormControlLabel-label' : {fontSize : 14},
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
                    <Typography variant="h4" sx={{color : "white"}}>IDR {paymentDetails.reservation.totalPrice}k</Typography>
                  </Grid>
                  <Grid xxs={12} sx={{display : "flex", justifyContent : "space-between"}}>
                    <Typography variant="body2" sx={{color : "rgba(255,255,255,.8)"}}>Platform Fee</Typography>
                    <Typography variant="h4" sx={{color : "white"}}>IDR {platformFee}k</Typography>
                  </Grid>
                  <Grid xxs={12} sx={{display : "flex", justifyContent : "space-between"}}>
                    <Typography variant="body2" sx={{color : "rgba(255,255,255,.8)"}}>Tax Fee</Typography>
                    <Typography variant="h4" sx={{color : "white"}}>IDR {taxFee.current}k</Typography>
                  </Grid>
                  <Divider sx={{backgroundColor : "rgba(255,255,255,.5)"}}/>
                  <Grid xxs={12} sx={{display : "flex", alignItems : "center",justifyContent : "space-between"}}>
                    <Typography variant="body2" sx={{color : "rgba(255,255,255,.8)"}}>Total Amount</Typography>
                    <Typography variant="h2" sx={{color : "white"}}>IDR {paymentDetails.reservation.totalPrice + platformFee + taxFee.current}k</Typography>
                  </Grid>
                  <Grid sx={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                    <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
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
                        paymentDetails.reservation.items.map((item, index) => (
                          <Grid container key={item.item._id} sx={{width : "100%", gap : 5}}>
                            <img src={item.item.img} alt={item.item.name} style={{width : "130px", height : "80px", borderRadius : "10px", objectFit : "cover"}}/>  
                            <Box component="div" sx={{color : "white", display : "flex", justifyContent : "space-between", alignItems : "center", flex : 1}}>
                              <Typography variant="h5">{item.item.name} (x{item.amount})</Typography>
                              <Typography variant="body3">IDR {item.item.price * item.amount}k</Typography>
                            </Box>
                          </Grid>
                        ))
                      }
                      <Divider component="div" sx={{height : 2, width : "100%", backgroundColor : "rgba(255,255,255,.6)", mt : 5, mb : 3}}/>
                      <Box component="div" sx={{color : "white", width : "100%", display : "flex", justifyContent : "space-between"}}>
                        <Typography variant="h4">Total : </Typography>
                        <Typography variant="h4">IDR {paymentDetails.reservation.totalPrice}k</Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
              
            </Grid>
          )
        }
      </Container>
      <Footer />
    </>
  )
}

export default Payment