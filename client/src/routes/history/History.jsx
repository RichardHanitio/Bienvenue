import React, {useEffect, useState} from 'react'

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Container, Typography, Box, Paper, TextField, FormControl, Select, MenuItem, InputBase, Card, CardContent, AvatarGroup, Avatar} from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";
import {useTheme} from "@mui/material/styles";
import {styled} from "@mui/material/styles";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import useFetch from "../../hooks/useFetch";

const History = () => {
  const theme = useTheme();
  const [allPayments, setAllPayments] = useState([]);
  const {loading, data, error} = useFetch("/payments");

  const CustomInput = styled(InputBase)(({theme}) => ({
    "& .MuiInputBase-input" : {
      color : "black",
      fontSize : 14,
      border : "1px solid rgba(0,0,0,.5)",
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
      {!loading && console.log(allPayments)}
      {error && console.log(error)}
      <Header />
      <Container fixed sx={{backgroundColor : theme.palette.primary.main, minHeight : "100vh", minWidth : "100vw", display : "flex", flexDirection : "column", alignItems : "center"}}>
        <Grid container sx={{width : {lg : "95%", xl : 1600}, gap : 5}}>
          <Box sx={{height : 80, width : "100%", display : "flex", alignItems : "center"}}>
            <Typography sx={{typography : {xxs : "h4", md : "h2"}, color : "white", textAlign : {xxs : "center", md : "flex-start"}}}>Payment History</Typography>
          </Box>
          <Grid xxs={12} sx={{height : 120, mb : 5}}>
            <Paper elevation={16} sx={{height : "100%", width : "100%", display : "flex", alignItems : "center", justifyContent : "center"}}>
              <Grid container sx={{width : "97%", height : "75%", flexDirection : "column", justifyContent : "space-between"}}>
                <Grid container sx={{alignItems : "flex-start", height : "45%"}}>
                  <Grid xs={1}>
                    <Typography variant="body2">Search</Typography>
                  </Grid>
                  <Grid xs={11} sx={{height : "100%"}}>
                    <TextField 
                      margin="normal" 
                      name="search"
                      variant="standard"
                      type="text"
                      // size="small"
                      placeholder="Enter your search keyword here..."
                      fullWidth
                      sx={{height : "100%", margin : 0}}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{alignItems : "center", height : "45%"}}>
                  <Grid xs={3} sx={{display : "flex", alignItems : "center", width : "100%", height : "100%"}}>
                    <Typography variant="body2" sx={{mr : 2}}>Status : </Typography>
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
                  <Grid xs={3} sx={{display : "flex", alignItems : "center", width : "100%", height : "100%"}}>
                    <Typography variant="body2" sx={{mr : 2}}>Sort By : </Typography>
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
                  <Grid xs={3} sx={{display : "flex", alignItems : "center", width : "100%", height : "100%"}}>
                    <Typography variant="body2" sx={{mr : 2}}>Limit : </Typography>
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
                  <Grid xs={3} sx={{display : "flex", alignItems : "center", width : "100%", height : "100%"}}>
                    <Typography variant="body2" sx={{mr : 2}}>Limit : </Typography>
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
            </Paper>
          </Grid>

          <Grid xxs={12} sx={{backgroundColor : "pink", height : 150}}>
            <Card elevation={20} sx={{display : "flex", width : "100%", height : "100%", alignItems : "center", justifyContent : "center"}}>
              <CardContent sx={{display : "flex", width : "100%", height : "100%"}}>
                <Box sx={{flexBasis : "30%", height : "100%", display : "flex", alignItems : "center", justifyContent : "center"}}>
                  <AvatarGroup total={8} sx={{
                    "& .MuiAvatar-root" : {
                      width : 60,
                      height : 60,
                    } 
                  }}>
                    <Avatar src="/assets/menus/steaks/tenderloin-steak.png"/>
                    <Avatar src="/assets/menus/steaks/tbone-steak.png" />
                    <Avatar src="/assets/menus/salads/salad.png" />
                    <Avatar src="/assets/menus/drinks/lemonade.png" />
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
                      <Typography variant="h4">64ad26173609b52d44ec8cc5</Typography>
                      <Typography variant="body2">Credit/Debit Card</Typography>
                      <Typography variant="body2">Sun, 21 Jul 2023</Typography>
                      <Typography variant="body2">-</Typography>
                    </Box>
                  </Box>
                  <Box sx={{flexBasis : "25%", display : "flex"}}>
                    <Box sx={{flexBasis : "20%", display : "flex", flexDirection : "column", justifyContent : "space-evenly"}}>
                      <Box><CalendarTodayIcon sx={{color : "black"}}/></Box>
                      <Box><AccessTimeIcon sx={{color : "black"}}/></Box>
                      <Box><PersonIcon sx={{color : "black"}}/></Box>
                    </Box>
                    <Box sx={{flexBasis : "80%", display : "flex", flexDirection : "column", justifyContent : "space-evenly"}}>
                      <Box><Typography variant="body2">Mon, 24 Jul 2023</Typography> </Box>
                      <Box><Typography variant="body2">18.00</Typography></Box>
                      <Box><Typography variant="body2">10 People</Typography></Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{flexBasis : "10%", display : "flex", alignItems : "center", justifyContent : "center"}}>
                  <Typography variant="body1" sx={{color : "red"}}>Not Paid</Typography>
                </Box>
              </CardContent>
            </Card>
          
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default History