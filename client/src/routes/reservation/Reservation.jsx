import React, {useContext, useEffect} from 'react'
import DatePicker from "react-datepicker"
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
// import Container from "./Reservation.styled"
import Header from '../../components/header/Header'
// import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer';
import { ReserveContext } from '../../context/ReserveContext';
import { useSnackbar } from 'react-simple-snackbar';

import {Container, Typography, Paper, Box, Divider, Button, TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {useTheme} from "@mui/material/styles";

const Reservation = () => {
  const {items, date, time, totalGuest, totalPrice, dispatch} = useContext(ReserveContext);
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const theme = useTheme();

  // send this to backend
  const handleSubmit = async() => {
    const jwt_token = Cookies.get("access_token");
    const refactoredItem = items.map(item => ({itemId: item._id, amount: item.amount}));
    const refactoredTime = time.split(":");
    const payload = {
      items : refactoredItem,
      date : `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
      time : new Date(1970,0,1,refactoredTime[0], refactoredTime[1], 0),
      totalGuest : totalGuest,
      totalPrice : totalPrice,
      method : "ovo",
      status : "pending",
    }
    try {
      await axios.post(`/reservations?uid=${jwt_decode(jwt_token).id}`, payload);
      dispatch({type: "FINISH_RESERVATION"});
      openSnackbar("Reservation made successfully");
    } catch(err) {
      openSnackbar("Reservation failed. Please try again");
    }
  }

  const handleIncreaseAmount = (e) => {
    dispatch({type: "INCREASE_ITEM_AMOUNT", payload : e.target.id})
  }

  const handleDecreaseAmount = (e) => {
    dispatch({type: "DECREASE_ITEM_AMOUNT", payload : e.target.id})
  }

  const eWallets = ["ovo", "gopay", "dana", "linkaja", "shoppeepay"];
  const creditDebitCards = ["visacard", "mastercard"];
  const banks = ["mandiri", "bca", "bni", "bri", "cimb"];

  return (
    <>
      <Header />
      <Container fixed sx={{backgroundColor : theme.palette.primary.main, minHeight : "100vh", minWidth : "100vw", display : "flex", flexDirection : "column", alignItems : "center"}}>
        <Grid container sx={{width : {lg : "95%", xl : 1600, gap : 100}}}>
          <Grid container sx={{justifyContent : "center", alignItems : "center", width : "100%", minHeight : 300}}>
            <Box component="div" sx={{width : "100%", height : 120, display : "flex", flexDirection : "column", justifyContent: "center"}}>
              <Typography variant="h3" sx={{color : "white", mb : 1}}>Order Summary</Typography>
              <Typography variant="body2" sx={{color : "rgba(255,255,255,.7)"}}>Cutomize your orders' amount based on your needs</Typography>
            </Box>
            <Paper elevation={10} sx={{width : "100%", backgroundColor : "rgba(255, 255, 255, 0.3)", display : "flex", alignItems : "center", justifyContent : "center" }}>
              <Box sx={{width : "90%", display : "flex", justifyContent : "center", alignItems : "center", flexDirection : "column", my : 5, gap : 3}}>
                {
                  items.map((item, index) => (
                    <Grid container sx={{width : "100%", gap : 5}}>
                      <img src={item.img} alt={item.name} style={{width : "200px", height : "150px", borderRadius : "10px", objectFit : "cover"}}/>  
                      <Box component="div" sx={{color : "white", display : "flex", flexDirection : "column", justifyContent : "space-around", flex : 1}}>
                        <Typography variant="h4">{item.name}</Typography>
                        <Typography variant="body2">IDR {item.price}k</Typography>
                      </Box>
                      <Box component="div" sx={{display : "flex", alignItems : "center", gap : 3}}>
                        <Button variant="contained" color="secondary">-</Button>
                        <Box component="div">
                          <Typography variant="body1" sx={{color : "white"}}>{item.amount}</Typography>
                        </Box>
                        <Button variant="contained" color="secondary">+</Button>
                      </Box>
                    </Grid>
                  ))
                }
                <Divider component="div" sx={{height : 5, width : "100%", backgroundColor : "white", mt : 5, mb : 3}}/>
                <Box component="div" sx={{color : "white", width : "100%", display : "flex", justifyContent : "space-between"}}>
                  <Typography variant="h3">Total : </Typography>
                  <Typography variant="h3">IDR {totalPrice}k</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid container sx={{justifyContent : "center", alignItems : "center", width : "100%"}}>
            <Box component="div" sx={{width : "100%", height : 80, display : "flex", flexDirection : "column", justifyContent: "center"}}>
              <Typography variant="h3" sx={{color : "white", mb : 1}}>Reservation Details</Typography>
              <Typography variant="body2" sx={{color : "rgba(255,255,255,.7)"}}>Change the date, time, and total guess on the reservation</Typography>
            </Box>
            <Grid container sx={{justifyContent : "space-around", alignItems : "center", width : "100%", height : 200}}>
              <Grid>
                <Typography variant='h4' sx={{mb : 3, color : "white"}}>Reservation date :</Typography>
                <DatePicker
                  style={{backgroundColor : "pink"}}
                  selected={date}
                  onSelect={(date) =>
                    dispatch({type : "CHANGE_DATE", payload : date})
                  }
                />
              </Grid>
              <Grid>
                <Typography variant='h4' sx={{mb : 3, color : "white"}}>Reservation time : </Typography>
                <TimePicker
                  onChange={(time) =>{
                    dispatch({type : "CHANGE_TIME", payload : time})
                  }}
                  value={time}
                />
              </Grid>
              <Grid>
                <Typography variant='h4' sx={{mb : 3, color : "white"}}>Total guests : </Typography>
                <TextField
                  type="number"
                  defaultValue="1"
                  onChange={(e) =>
                    dispatch({type : "CHANGE_TOTAL_GUEST", payload : e.target.value})
                  }
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid container sx={{justifyContent : "center", alignItems : "center", width : "100%"}}>
            <Box component="div" sx={{width : "100%", height : 120, display : "flex", flexDirection : "column", justifyContent: "center"}}>
              <Typography variant="h3" sx={{color : "white", mb : 1}}>Choose Payment Method</Typography>
              <Typography variant="body2" sx={{color : "rgba(255,255,255,.7)"}}>Select how you pay for your reservation</Typography>
            </Box>
            <Grid container sx={{justifyContent : "space-around", alignItems : "center", width : "90%", height : 300}}>
              <Grid md={4} sx={{height : "100%", width : "100%", display : "flex", flexDirection : "column", alignItems : "center", justifyContent : "center", gap : 2}}>
                <Paper elevation={4} sx={{backgroundColor : "rgba(255,255,255,.6)", width : "70%", height : "60%", display : "flex", alignItems : "center", justifyContent : "center", cursor : "pointer"}}>
                  <Grid container spacing={2} sx={{width : "90%", height : "80%"}}>
                    {
                      eWallets.map((eWallet) => (
                        <Grid md={4} key={eWallet}>
                          <img src={`/assets/payments/${eWallet}.png`} alt={eWallet} style={{width : "90%", height : "90%", objectFit : "contain"}}/>
                        </Grid>
                      ))
                    }
                  </Grid>
                </Paper>
                <Typography variant="body2" sx={{color : "rgba(255,255,255,.9)"}}>Pay with e-wallet</Typography>
              </Grid>
              <Grid md={4} sx={{height : "100%", width : "100%", display : "flex", flexDirection : "column", alignItems : "center", justifyContent : "center", gap : 2}}>
                <Paper elevation={4} sx={{backgroundColor : "rgba(255,255,255,.6)", width : "70%", height : "60%", display : "flex", alignItems : "center", justifyContent : "center"}}>
                  <Grid container spacing={2} sx={{width : "90%", height : "80%"}}>
                    {
                      creditDebitCards.map((creditDebitCard) => (
                        <Grid md={6} key={creditDebitCard}>
                          <img src={`/assets/payments/${creditDebitCard}.png`} alt={creditDebitCard} style={{width : "90%", height : "90%", objectFit : "contain"}}/>
                        </Grid>
                      ))
                    }
                  </Grid>
                </Paper>
                <Typography variant="body2" sx={{color : "rgba(255,255,255,.7)"}}>Pay with credit/debit cards</Typography>
              </Grid>
              <Grid md={4} sx={{height : "100%", width : "100%", display : "flex", flexDirection : "column", alignItems : "center", justifyContent : "center", gap : 2}}>
                <Paper elevation={4} sx={{backgroundColor : "rgba(255,255,255,.6)", width : "70%", height : "60%", display : "flex", alignItems : "center", justifyContent : "center"}}>
                  <Grid container spacing={2} sx={{width : "90%", height : "80%"}}>
                    {
                      banks.map((bank) => (
                        <Grid md={4} key={bank}>
                          <img src={`/assets/payments/${bank}.png`} alt={bank} style={{width : "90%", height : "90%", objectFit : "contain"}}/>
                        </Grid>
                      ))
                    }
                  </Grid>
                </Paper>
                <Typography variant="body2" sx={{color : "rgba(255,255,255,.7)"}}>Pay with bank accounts</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <div className="reservation-inner-container">
          <div className="order-summary">
            <h1 className="order-summary-title">Order Summary</h1>
            {
              (items.length > 0 && totalPrice > 0) ? (
                <>
                  <div className="orders-container">
                    {
                      items.map((item, index) => (
                        <div className="orders-item" key={item._id}>
                          <div className="orders-item-image">
                            <img src={item.img} alt={item.name} />
                          </div>
                          <div className="orders-item-details">
                            <div className="orders-item-name">{item.name}</div>
                            <div className="orders-item-price">IDR {item.price*item.amount}k</div>
                          </div>
                          <div className="orders-item-amount">
                            <div className="orders-item-amount-button orders-item-amount-minus" id={item._id} onClick={handleDecreaseAmount}>
                              -
                            </div>
                            <span>
                              {item.amount}
                            </span>
                            <div className="orders-item-amount-button orders-item-amount-plus" id={item._id} onClick={handleIncreaseAmount}>
                              +
                            </div>
                          </div>
                        </div>  
                      ))
                    }
                    <div className="horizontal-line" />
                    <div className="total">
                      <div>Total : </div>
                      <div>IDR {totalPrice}k</div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="no-item">No items in cart</div>
              )
            }
          </div>
          <div className="reservation-details">
            <h1 className="reservation-details-title">Reservation</h1>
            <div className="details">
              <div className="detail detail-date">
                <div className="detail-label">Choose reservation date :</div>
                <DatePicker
                  selected={date}
                  className="detail-input"
                  onSelect={(date) =>
                    dispatch({type : "CHANGE_DATE", payload : date})
                  }
                />
              </div>
              <div className="detail detail-guest">
                <div className="detail-label">Total guests :</div>
                <input
                  type="number"
                  className="detail-input"
                  defaultValue="1"
                  onChange={(e) =>
                    dispatch({type : "CHANGE_TOTAL_GUEST", payload : e.target.value})
                  }
                />
              </div>
              <div className="detail detail-time">
                <div className="detail-label">Reservation time :</div>
                <TimePicker
                  onChange={(time) =>{
                    dispatch({type : "CHANGE_TIME", payload : time})
                  }}
                  className="detail-input"
                  value={time}
                />
              </div>
            </div>
            <Button className="reserve-button" variant="primary" width="90%" onClick={handleSubmit} disabled={totalPrice === 0}>
              Reserve
            </Button>
          </div>
        </div> */}
      </Container>
      <Footer />
    </>
  );
}

export default Reservation