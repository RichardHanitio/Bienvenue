import React from 'react'
import { Watch } from 'react-loader-spinner';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Typography, Button, Box, Card, CardMedia, CardContent, CardHeader, Paper, Avatar } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


import RatingStars from '../../components/ratingstars/RatingStars';


const HomeMobile = (props) => {
  return (
    <Grid container gap={10} justifyContent="center" sx={{ width : "95%"}}>
      <Grid container xs={11} sx={{height : {xxs : 600, sm : 500}, justifyContent : "center"}}>
        <Grid container alignItems="center" justifyContent="center" sx={{height : 300, width : 300}} >
          <img src="/assets/home-pic-1.png" alt="" style={{height : "100%", width: "100%"}} />
        </Grid>
        <Grid container justifyContent="space-around" alignItems="center" direction="column">
          <Grid xxs={12}>
            <Typography variant="h3" sx={{color : "white", textAlign : "center"}}>We Serve The Taste You Love</Typography>
          </Grid>
          <Grid xxs={12}>
            <Typography variant="body2" sx={{textAlign : "center",  color : "white"}}>
              Bienvenue is a type of restaurant which typically serve food or drinks in addition to light refreshments such as baked good food.
            </Typography>
          </Grid>
          <Grid sx={{alignSelf : "center"}}>
            <Button variant="contained" color="primary">Order Now </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container xs={11} direction="column" justifyContent="space-around" alignItems="center" sx={{height : 700}}>
        <Grid container alignItems="center" justifyContent="center" sx={{height : 250, width : 250}}>
          <img src="/assets/home-pic-2.png" alt="" style={{height : "100%", width: "100%"}} />
        </Grid>
        <Grid container justifyContent="space-around" direction="column" alignItems="center" gap={3}>
          <Grid>
            <Typography variant="h3" sx={{color : "white", textAlign : "center"}}>We Are More Than Multiple Services</Typography>
          </Grid>
          <Grid container justifyContent="center" sx={{width : 300}}>
            {
              props.multipleServices.map((service) => (
                <Grid container xxs={6} direction="column" justifyContent="center" alignItems="center" sx={{mb:2}}>
                  <img src={service.img} alt={service.title} style={{width : 40, height : 40}} />
                  <Typography variant="body3" textAlign="center" color="white" sx={{mt: 1}}>{service.title}</Typography>
                </Grid>
              ))
            }
          </Grid>
          <Grid sx={{alignSelf : "center"}}>
            <Button variant="contained" color="primary">About Us </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container xs={11} sx={{minHeight : 300, justifyContent : "center"}} elevation={24}>
        <Grid container sx={{width : "100%"}}>
          <Typography variant="h3" sx={{color : "white", textAlign : "center"}}>Special Offer Just For Today</Typography>
        </Grid>
        <Grid container direction="column" alignItems="center" sx={{width : {xss : "100%", sm : "70%"}}}>
          {props.loading && (
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
          )}
          {
            (props.discountedMenu && !props.loading) && (
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
                props.discountedMenu.map((menu) => (
                  <Box component="div">
                    <Card raised sx={{position : "relative", top : 0, left : {xxs : 0, sm : "10%"}, margin : "20px 0", width : {xxs : "100%", sm : "80%"}, minHeight : 450}}>
                      <CardMedia
                        sx={{ height: 200 }}
                        image={menu.img}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h4" component="div" textAlign="center">
                          {menu.name}
                        </Typography>
                        <Box sx={{display : "flex", justifyContent : "center", margin : "15px 0"}}>
                          <RatingStars amount={menu.rating} />
                        </Box>
                        <Typography variant="body3" component="div" sx={{mb : 4}} textAlign="center">
                          {menu.desc}
                        </Typography>
                        <Box component="div" sx={{display : "flex", justifyContent : "space-between"}}>
                          <Box component="div">
                            <Typography variant="body2" sx={{color : props.theme.palette.error.light, fontWeight: 600}}>
                              IDR {menu.price}k/gr
                            </Typography>
                            <Typography variant="body3" sx={{textDecoration: "line-through"}}>
                              IDR {menu.price}k/gr
                            </Typography>
                          </Box>
                          <Button variant="contained" color="secondary" sx={{fontSize : 14, margin : "10px"}}>Add to Cart</Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                ))
              }   
              </Slider>
            )
          }
          {
            (!props.loading && !props.discountedMenu) && (
              <Typography variant="body1" color="white" sx={{mt: 3}}>Sorry, no offers today :) </Typography>
            )
          }
        </Grid>
      </Grid>

      <Paper elevation={50} sx={{height: 500, width : "100%", display : "flex", flexDirection : "column", alignItems : "center", justifyContent : "center", backgroundColor : "#C4D0D0"}}> 
        <Grid container sx={{display : "flex", flexDirection : {xxs : "column", md : "row"}, alignItems : "center", justifyContent : "space-around", width : "90%", height : "95%"}}>
          <Grid container alignItems="center" justifyContent="center" sx={{height : 250, width : 250}}>
            <img src="/assets/reserve.png" alt="" style={{height : "100%", width: "100%"}} />
          </Grid>
          <Grid container justifyContent="space-around" direction="column" gap={5}>
            <Grid>
              <Typography sx={{typography : {xxs : "h3", md :"h2"}, color : props.theme.palette.main, textAlign : "center"}}>Do You Have Any Dinner Plan Today? <br/> Reserve Your Table</Typography>
            </Grid>
            <Grid sx={{alignSelf : "center"}}>
              <Button variant="contained" color="primary">Make Reservation </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Grid container xs={11} sx={{justifyContent : "center"}} gap={3} elevation={24}>
        <Grid container>
          <Typography variant="h3" sx={{color : "white", textAlign : "center"}}>What Our Customers Say?</Typography>
        </Grid>
        <Grid container sx={{width : "100%"}}>
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
                <Box component="div">
                  <Card raised sx={{position : "relative", left : {xxs : "5%", sm : "15%"}, width : {xxs : "90%", sm : "70%"}, minHeight : 100}}>
                    <CardHeader 
                      avatar = {
                        <Avatar src={review.img}></Avatar>
                      }
                      title={review.name}
                      subheader={review.title}
                      action={
                        <FormatQuoteIcon sx={{fontSize : 50, color : props.theme.palette.primary.main}}/>
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

export default HomeMobile