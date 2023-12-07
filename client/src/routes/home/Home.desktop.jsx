import React from 'react'
import { Watch } from 'react-loader-spinner';
import Slider from "react-slick";
import Item from "../../components/item/Item";


import { Typography, Button, Box, Card, CardMedia, CardContent, CardHeader, Paper, Avatar } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import "slick-carousel/slick/slick.css";
import {styled} from "@mui/system";

import "slick-carousel/slick/slick-theme.css";

// styles
const HomeButton = styled(Button)(({height=50, width=200, theme}) => ({
  fontSize : theme.typography.h4.fontSize,
  fontWeight : theme.typography.h4.fontWeight,   
  padding : "10px 30px",
  height : height,
  width : width
}))

const HomeDesktop = (props) => {
  return (
    <Grid container justifyContent="center" gap={10} sx={{width : 1600}}>
      <Grid container xs={10} sx={{height : 600}}>
        <Grid container direction="column" gap={9} sx={{flexBasis : "50%", justifyContent : "center", mt : 10}}>
          <Grid>
            <Typography variant="h1" sx={{color : "white", textAlign : "justify"}}>We Serve The Taste You Love</Typography>
          </Grid>
          <Grid>
            <Typography variant="body1" sx={{textAlign : "justify",  color : "white"}}>
              Bienvenue is a type of restaurant which typically serve food or drinks in addition to light refreshments such as baked good food.
            </Typography>
          </Grid>
          <Grid>

            <HomeButton variant="contained" sx={{height : 50, width : 200}} onClick={props.handleOrderNowOnClick}> 
              Order Now 
            </HomeButton>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" sx={{flexBasis : "50%", alignItems : "center"}}>
          <img src="/assets/home-pic-1.png" alt="" style={{width : "90%", height : "auto"}}/>
        </Grid>
      </Grid>

      <Grid container xs={11} sx={{height : 800, justifyContent : "space-around", alignItems : "center"}}>
        <Grid container alignItems="center" justifyContent="center" sx={{flexBasis : "45%"}}>
          <img src="/assets/home-pic-2.png" alt="" style={{height : "70%", width: "80%"}} />
        </Grid>
        <Grid container justifyContent="space-around" direction="column" alignItems="flex-start" gap={5} sx={{flexBasis : "55%"}}>
          <Grid>
            <Typography variant="h1" sx={{color : "white"}}>We Are More Than Multiple Services</Typography>
          </Grid>
          <Grid container sx={{width : "100%"}}>
            {
              props.multipleServices.map((service) => (
                <Grid container xs={6} gap={2} alignItems="center" sx={{mb:2}} key={service.title}>
                  <img src={service.img} alt={service.title} style={{width : 60, height : 60}} />
                  <Typography variant="body1" textAlign="center" color="white" sx={{mt: 1}}>{service.title}</Typography>
                </Grid>
              ))
            }
          </Grid>
          <Grid>
            <HomeButton variant="contained" color="primary" onClick={props.handleAboutUsOnClick}>About Us </HomeButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid container xs={12} gap={5} sx={{minHeight : 300, justifyContent : "center", mb : 10}} elevation={24}>
        <Grid container>
          <Typography variant="h1" sx={{color : "white", textAlign : "center"}}>Special Offer Just For Today</Typography>
        </Grid>
        <Grid container direction="column" alignItems="center" sx={{width : {xss : "100%", sm : "70%"}}}>
          {
            (props.loading && !props.discountedMenuLoadingError) && (
            <>
              <Watch
                height="50"
                width="50"
                radius="48"
                color="white"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
              <Typography variant="body2" color="white" sx={{mt: 3}}>Loading today's offers...</Typography>
            </>
            )
          }
          {
            (!props.loading && props.discountedMenuLoadingError) && (
              <Typography variant="body2" color="white" sx={{mt: 3}}>Something went wrong, please reload the page...</Typography>
            )
          }
          {
            (props.discountedMenu && !props.loading) && (
              <Slider 
                infinite={true} 
                style={{maxWidth : "100%"}}
                dots={true}
                speed={500}
                slidesToShow={props.discountedMenu.length < 3 ? props.discountedMenu.length : 3}
                slidesToScroll={1}
                autoplay= {true}
                autoplaySpeed= {5000}
                pauseOnHover= {true}
              > 
              {
                props.discountedMenu.map((menu) => (
                  <Item data={menu} isLoggedIn={props.user!==null} key={menu._id}/>
                ))
              }   
              </Slider>
            )
          }
          {
            (!props.loading && props.discountedMenu.length === 0) && (
              <Typography variant="body1" color="white" sx={{mt: 3}}>Sorry, no offers today :) </Typography>
            )
          }
        </Grid>
      </Grid>
      
      <Paper elevation={24} sx={{height: 500, width : "100%", display : "flex", alignItems : "center", justifyContent : "center", backgroundColor : "#C4D0D0", mb : 5}}> 
        <Box component="div" sx={{width : "90%", height : "90%", display : "flex", alignItems : "center", justifyContent : "center"}}> 
          <Grid container sx={{display : "flex", flexDirection : {xxs : "column", md : "row"}, alignItems : "center", justifyContent : "space-around", width : "90%", height : "95%", flexBasis : "65%"}}>
            <Grid container justifyContent="space-around" direction="column" gap={5}>
              <Grid>
                <Typography variant="h1" sx={{color : props.theme.palette.primary.main}}>Do You Have Any Dinner Plan Today? <br/> Reserve Your Table</Typography>
              </Grid>
              <Grid>
                <HomeButton variant="contained" height="100" width="300" color="primary" onClick={props.handleMakeReservationOnClick}>
                  Make Reservation
                </HomeButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="center" sx={{height : "100%", flexBasis : "35%"}}>
            <img src="/assets/reserve.png" alt="" style={{width: "80%"}} />
          </Grid>
        </Box>
      </Paper>

      <Grid container xs={11} direction="column" alignItems="center" sx={{height : 500, justifyContent : "center"}} gap={8} elevation={24}>
        <Grid container>
          <Typography variant="h2" sx={{color : "white", textAlign : "center"}}>What Our Customers Say?</Typography>
        </Grid>
        <Grid container sx={{width : "60%"}}>
          <Slider 
            infinite={true} 
            style={{maxWidth : "100%"}}
            dots={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay= {true}
            autoplaySpeed= {5000}
            pauseOnHover= {true}
          >
            {
              props.reviews.map(review => (
                <Box component="div" key={review.name}>
                  <Card raised sx={{position : "relative", left : "15%", width : "70%", height : "100%"}}>
                    <CardHeader 
                      avatar = {
                        <Avatar src={review.img} sx={{width : 70, height : 70}}></Avatar>
                      }
                      title={
                        <Typography variant="h3">{review.name}</Typography>
                      }
                      subheader={review.title}
                      action={
                        <FormatQuoteIcon sx={{fontSize : 80, color : props.theme.palette.primary.main}}/>
                      }
                    />
                    <CardContent>
                      <Typography gutterBottom variant="body2" component="div" sx={{color : "#575757", fontStyle:"italic", textAlign : "justify"}}>
                        {review.review}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>    
              ))
            }
          </Slider>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeDesktop