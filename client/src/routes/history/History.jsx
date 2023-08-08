import React, {useEffect, useState} from 'react'

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Container, Typography, Box, TextField, FormControl, Select, MenuItem, InputBase, Card, CardContent, AvatarGroup, Avatar} from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";
import {useTheme} from "@mui/material/styles";
import {styled} from "@mui/material/styles";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import useFetch from "../../hooks/useFetch";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode"

const History = () => {
  const theme = useTheme();
  const [allPayments, setAllPayments] = useState([]);
  const jwt_token = Cookies.get("access_token");
  const {loading, data, error} = useFetch(`/payments?uid=${jwt_decode(jwt_token).id}`);

  const CustomInput = styled(InputBase)(({theme}) => ({
    "& .MuiInputBase-input" : {
      color : "white",
      fontSize : 14,
      border : "1px solid rgba(255,255,255,.5)",
      padding: '5px 10px',
    },
  }))

  const CustomMenuItem = styled(MenuItem)(({theme}) => ({
    fontSize : 14
  }))

  useEffect(() => {
    !loading && setAllPayments(data.data)
  }, [data, loading])

  return (
    <>
      {console.log(data)}
      <Header />
      <Container fixed sx={{backgroundColor : theme.palette.primary.main, minHeight : "350vh", minWidth : "100vw", display : "flex", flexDirection : "column", alignItems : "center"}}>
        <Grid container sx={{width : {lg : "95%", xl : 1600}, gap : 5}}>
          <Box sx={{height : 80, width : "100%", display : "flex", alignItems : "center"}}>
            <Typography sx={{typography : {xxs : "h4", md : "h2"}, color : "white", textAlign : {xxs : "center", md : "flex-start"}}}>Payment History</Typography>
          </Box>
          <Grid xxs={12} sx={{height : 120, width : "60%", mb : 5}}>
            <Grid container sx={{justifyContent : "center"}}>
              <Grid sx={{width : "9%", display : "flex", alignItems : "center"}}>
                <Typography variant="body2" sx={{color : "white"}}>Search</Typography>
              </Grid>
              <Grid sx={{width : "91%"}}>
                <TextField 
                  margin="normal" 
                  name="search"
                  variant="outlined"
                  type="text"
                  size="small"
                  placeholder="Enter your search keyword here..."
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container sx={{alignItems : "center", width : "100%"}}>
              <Grid sx={{display : "flex", width : "25%", alignItems : "center", height : "100%"}}>
                <Typography variant="body2" sx={{mr : 2, color : "white"}}>Status : </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select value="all" input={<CustomInput />}>
                    <CustomMenuItem value="all">All</CustomMenuItem>
                    <CustomMenuItem value="not-paid">Not Paid</CustomMenuItem>
                    <CustomMenuItem value="pending">Pending</CustomMenuItem>
                    <CustomMenuItem value="accepted">Accepted</CustomMenuItem>
                    <CustomMenuItem value="declined">Declined</CustomMenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid sx={{display : "flex", width : "25%", alignItems : "center", height : "100%"}}>
                <Typography variant="body2" sx={{mr : 2, color : "white"}}>Sort By : </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select value="all" input={<CustomInput />}>
                    <CustomMenuItem value="all">All</CustomMenuItem>
                    <CustomMenuItem value="not-paid">Not Paid</CustomMenuItem>
                    <CustomMenuItem value="pending">Pending</CustomMenuItem>
                    <CustomMenuItem value="accepted">Accepted</CustomMenuItem>
                    <CustomMenuItem value="declined">Declined</CustomMenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid sx={{display : "flex", width : "25%", alignItems : "center", height : "100%"}}>
                <Typography variant="body2" sx={{mr : 2, color : "white"}}>Limit : </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select value="all" input={<CustomInput />}>
                    <CustomMenuItem value="all">All</CustomMenuItem>
                    <CustomMenuItem value="not-paid">Not Paid</CustomMenuItem>
                    <CustomMenuItem value="pending">Pending</CustomMenuItem>
                    <CustomMenuItem value="accepted">Accepted</CustomMenuItem>
                    <CustomMenuItem value="declined">Declined</CustomMenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid sx={{display : "flex", width : "25%", alignItems : "center", height : "100%"}}>
                <Typography variant="body2" sx={{mr : 2, color : "white"}}>Limit : </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select value="all" input={<CustomInput />}>
                    <CustomMenuItem value="all">All</CustomMenuItem>
                    <CustomMenuItem value="not-paid">Not Paid</CustomMenuItem>
                    <CustomMenuItem value="pending">Pending</CustomMenuItem>
                    <CustomMenuItem value="accepted">Accepted</CustomMenuItem>
                    <CustomMenuItem value="declined">Declined</CustomMenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          {
            !loading && (
              <Grid xxs={12} sx={{height : 150}}>
                {
                  !loading && allPayments.map(payment => 
                    (
                      <Card elevation={20} sx={{display : "flex", width : "100%", height : "100%", alignItems : "center", justifyContent : "center", mb : 3}}>
                        <CardContent sx={{display : "flex", width : "100%", height : "100%"}}>
                          <Box sx={{flexBasis : "27%", height : "100%", display : "flex", alignItems : "center", justifyContent : "center"}}>
                            <AvatarGroup total={payment.reservation.items.length} sx={{
                              "& .MuiAvatar-root" : {
                                width : 60,
                                height : 60,
                              } 
                            }}>
                              {
                                payment.reservation.items.map((item, idx) => (
                                  idx < 4 && (
                                    <Avatar src={item.item.img} key={idx}/>
                                  )
                                ))
                              }
                            </AvatarGroup>
                          </Box>
                          <Box sx={{flexBasis : "60%", display : "flex"}}>
                            <Box sx={{flexBasis : "75%", display : "flex"}}>
                              <Box sx={{flexBasis : "40%", display : "flex", flexDirection : "column", justifyContent : "space-evenly"}}>
                                <Typography variant="h4">Payment ID</Typography>
                                <Typography variant="body2">Payment Method</Typography>
                                <Typography variant="body2">Reservation Created</Typography>
                                <Typography variant="body2">Payment Made</Typography>
                              </Box>
                              <Box sx={{flexBasis : "5%", display : "flex", flexDirection : "column", justifyContent : "space-evenly"}}>
                                <Typography variant="h4">:</Typography>
                                <Typography variant="body2">:</Typography>
                                <Typography variant="body2">:</Typography>
                                <Typography variant="body2">:</Typography>
                              </Box>
                              <Box sx={{flexBasis : "55%", display : "flex", flexDirection : "column", justifyContent : "space-evenly"}}>
                                <Typography variant="h4">{payment._id.slice(0,12)}...{payment._id.slice(-3,)}</Typography>
                                <Typography variant="body2">{payment.method ? payment.method.toUpperCase() : "-"}</Typography>
                                <Typography variant="body2">{
                                  new Date(payment.reservation.createdAt).toString().substring(0, 15)
                                }
                                </Typography>
                                <Typography variant="body2">{payment.paymentDateTime ? new Date(payment.paymentDateTime).toString().substring(0, 15) : "-"}</Typography>
                              </Box>
                            </Box>
                            <Box sx={{flexBasis : "25%", display : "flex"}}>
                              <Box sx={{flexBasis : "20%", display : "flex", flexDirection : "column", justifyContent : "space-evenly"}}>
                                <Box><CalendarTodayIcon sx={{color : "black"}}/></Box>
                                <Box><AccessTimeIcon sx={{color : "black"}}/></Box>
                                <Box><PersonIcon sx={{color : "black"}}/></Box>
                              </Box>
                              <Box sx={{flexBasis : "80%", display : "flex", flexDirection : "column", justifyContent : "space-evenly"}}>
                                <Box><Typography variant="body2">{
                                  new Date(payment.reservation.date).toString().substring(0, 15)
                                }</Typography></Box>
                                <Box><Typography variant="body2">{
                                  new Date(payment.reservation.time).toString().substring(16, 21)
                                }</Typography></Box>
                                <Box><Typography variant="body2">{payment.reservation.totalGuest} People</Typography></Box>
                              </Box>
                            </Box>
                          </Box>
                          <Box sx={{flexBasis : "13%", display : "flex", alignItems : "center", justifyContent : "center"}}>
                            <Typography variant="body1" sx={{color : "red"}}>{payment.status.toUpperCase()}</Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    )  
                  )
                }
              </Grid>
            )
          }
          </Grid>
        </Container>
      <Footer />
    </>
  )
}

export default History