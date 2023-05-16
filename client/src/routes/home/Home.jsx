import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
// import Container from "./Home.styled"
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
// import Button from '../../components/button/Button';
import {AuthContext} from "../../context/AuthContext";
import RatingStars from '../../components/ratingstars/RatingStars';
import { ReserveContext } from '../../context/ReserveContext';
import {reviews, allMenus} from "../../datas";

import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";
import Button from "@mui/material/Button";
import useWindowSize from '../../hooks/useWindowSize';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import useFetch from '../../hooks/useFetch';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Watch } from 'react-loader-spinner';
import Slider from "react-slick";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const navigate = useNavigate();
  const {items, dispatch} = useContext(ReserveContext);
  const {user} = useContext(AuthContext);
  const [discountedMenu, setDiscountedMenu] = useState(null);
  const isDesktopDisplay = useWindowSize();
  
  const theme = useTheme();

  const {data, loading, error} = useFetch("/menus");
  
  const handleWhatsappOnClick = () => {
    const message = "Hi, I'd like to ask something";
    const whatsappURL = `https://wa.me/+6285925025265?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  }

  const reviews = [
    {
      name : "Sundar Pichai",
      title : "CEO of Google",
      img : "/assets/sundarpichai.jpg",
      review : "Bienvenue is the best Italian restaurant in the world. The food made by world class chef, the place is aesthetic, everything is just perfect."
    },
    {
      name : "Elon Musk",
      title : "CEO of Tesla",
      img : "/assets/elonmusk.jpg",
      review : "Everything we ate was fresh and delicious. The award-winning chefs use the best quality ingredients to produce dishes that are simply delightful."
    },
    {
      name : "Jensen Huang",
      title : "CEO of NVIDIA",
      img : "/assets/jensenhuang.jpg",
      review : "Bienvenue is one of the best Italian restaurant in the world. The food is really awesome and the place also awesome."
    }
  ]

  useEffect(() => {
    !loading && setDiscountedMenu(data.data.slice(0,4))
  }, [data, loading])


  const multipleServices = [
    {
      img : "/assets/services24hr.png",
      title : "Services 24/7",
    },
    {
      img : "/assets/pre-reservation.png",
      title : "Pre-Reservation",
    },
    {
      img : "/assets/clean-kitchen.png",
      title : "Clean Kitchen"
    },
    {
      img : "/assets/superchefs.png",
      title : "Super Chefs"
    },
    {
      img : "/assets/organized-foodie-place.png",
      title : "Organized Foodie Place"
    }
  ]


  const renderDesktopHome = () => (
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
            <Button variant="contained" sx={{height : 50, width : 200}}> Order Now </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" sx={{flexBasis : "45%", alignItems : "center"}}>
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
          <Grid container sx={{width : "90%"}}>
            {
              multipleServices.map((service) => (
                <Grid container xs={6} gap={2} alignItems="center" sx={{mb:2}}>
                  <img src={service.img} alt={service.title} style={{width : 60, height : 60}} />
                  <Typography variant="body1" textAlign="center" color="white" sx={{mt: 1}}>{service.title}</Typography>
                </Grid>
              ))
            }
          </Grid>
          <Grid>
            <Button variant="contained" color="primary">About Us </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container xs={12} gap={5} sx={{minHeight : 300, justifyContent : "center", mb : 10}} elevation={24}>
        <Grid container>
          <Typography variant="h1" sx={{color : "white", textAlign : "center"}}>Special Offer Just For Today</Typography>
        </Grid>
        <Grid container direction="column" alignItems="center" sx={{width : {xss : "100%", sm : "70%"}}}>
          {loading && (
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
            (discountedMenu && !loading) && (
              <Slider 
                infinite={true} 
                style={{maxWidth : "100%"}}
                dots={true}
                speed={500}
                slidesToShow={discountedMenu.length < 3 ? discountedMenu.length : 3}
                slidesToScroll={1}
                autoplay= {true}
                autoplaySpeed= {5000}
                pauseOnHover= {true}
              >
              {
                discountedMenu.map((menu) => (
                  <Box component="div">
                    <Card raised sx={{position : "relative", left : 15, width : {xxs : "100%", sm : "90%"}, height : 550}}>
                      <CardMedia
                        sx={{ height: 250 }}
                        image={menu.img}
                      />
                      <CardContent sx={{display : "flex", height : 300, flexDirection : "column", justifyContent : "space-between"}}>
                        <Typography variant="h3" component="div" textAlign="center">
                          {menu.name}
                        </Typography>
                        <Box sx={{display : "flex", justifyContent : "center"}}>
                          <RatingStars amount={menu.rating} />
                        </Box>
                        <Typography variant="body2" component="div" sx={{mb : 3}} textAlign="center">
                          {menu.desc.length > 60 ? menu.desc.slice(0, 60)+"..." : menu.desc}
                        </Typography>
                        <Box component="div" sx={{display : "flex", justifyContent : "space-between"}}>
                          <Box component="div">
                            <Typography variant="body1" sx={{color : theme.palette.error.light, fontWeight: 600}}>
                              IDR {menu.price}k/gr
                            </Typography>
                            <Typography variant="body2" sx={{textDecoration: "line-through"}}>
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
            (!loading && !discountedMenu) && (
              <Typography variant="body1" color="white" sx={{mt: 3}}>Sorry, no offers today :) </Typography>
            )
          }
        </Grid>
      </Grid>
      
      <Paper elevation={50} sx={{height: 500, width : "100%", display : "flex", alignItems : "center", justifyContent : "center", backgroundColor : "#C4D0D0", mb : 5}}> 
        <Box component="div" sx={{width : "90%", height : "90%", display : "flex", alignItems : "center", justifyContent : "center"}}> 
          <Grid container sx={{display : "flex", flexDirection : {xxs : "column", md : "row"}, alignItems : "center", justifyContent : "space-around", width : "90%", height : "95%", flexBasis : "65%"}}>
            <Grid container justifyContent="space-around" direction="column" gap={5}>
              <Grid>
                <Typography variant="h1" sx={{color : theme.palette.primary.main}}>Do You Have Any Dinner Plan Today? <br/> Reserve Your Table</Typography>
              </Grid>
              <Grid>
                <Button variant="contained" color="primary">
                  <Typography variant="body1">Make Reservation</Typography> 
                </Button>
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
              reviews.map(review => (
                <Box component="div">
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
                        <FormatQuoteIcon sx={{fontSize : 80, color : theme.palette.primary.main}}/>
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

  const renderMobileHome = () => (
    <Grid container gap={10} sx={{display : "flex", justifyContent : "center", width : "95%"}}>
      <Grid container xs={11} sx={{height : {xxs : 600, sm : 500}, justifyContent : "center"}}>
        <Grid container alignItems="center" justifyContent="center" sx={{height : 300, width : 300}} >
          <img src="/assets/home-pic-1.png" alt="" style={{height : "100%", width: "100%"}} />
        </Grid>
        <Grid container justifyContent="space-around" direction="column">
          <Grid>
            <Typography variant="h3" sx={{color : "white", textAlign : "center"}}>We Serve The Taste You Love</Typography>
          </Grid>
          <Grid>
            <Typography variant="body2" sx={{textAlign : "center",  color : "white"}}>
              Bienvenue is a type of restaurant which typically serve food or drinks in addition to light refreshments such as baked good food.
            </Typography>
          </Grid>
          <Grid sx={{alignSelf : "center"}}>
            <Button variant="contained" color="primary">Order Now </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container xs={11} direction="column" sx={{height : 700, justifyContent : "space-around", alignItems : "center"}}>
        <Grid container alignItems="center" justifyContent="center" sx={{height : 250, width : 250}}>
          <img src="/assets/home-pic-2.png" alt="" style={{height : "100%", width: "100%"}} />
        </Grid>
        <Grid container justifyContent="space-around" direction="column" alignItems="center" gap={3}>
          <Grid>
            <Typography variant="h3" sx={{color : "white", textAlign : "center"}}>We Are More Than Multiple Services</Typography>
          </Grid>
          <Grid container justifyContent="center" sx={{width : 300}}>
            {
              multipleServices.map((service) => (
                <Grid container xs={6} direction="column" justifyContent="center" alignItems="center" sx={{mb:2}}>
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
        <Grid container>
          <Typography variant="h3" sx={{color : "white", textAlign : "center"}}>Special Offer Just For Today</Typography>
        </Grid>
        <Grid container direction="column" alignItems="center" sx={{width : {xss : "100%", sm : "70%"}}}>
          {loading && (
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
            (discountedMenu && !loading) && (
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
                discountedMenu.map((menu) => (
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
                            <Typography variant="body2" sx={{color : theme.palette.error.light, fontWeight: 600}}>
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
            (!loading && !discountedMenu) && (
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
              <Typography sx={{typography : {xxs : "h3", md :"h2"}, color : "white", textAlign : "center"}}>Do You Have Any Dinner Plan Today? <br/> Reserve Your Table</Typography>
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
              reviews.map(review => (
                <Box component="div">
                  <Card raised sx={{position : "relative", left : {xxs : "5%", sm : "10%"}, width : {xxs : "90%", sm : "80%"}, minHeight : 250}}>
                    <CardHeader 
                      avatar = {
                        <Avatar src={review.img}></Avatar>
                      }
                      title={review.name}
                      subheader={review.title}
                      action={
                        <FormatQuoteIcon sx={{fontSize : 50, color : theme.palette.primary.main}}/>
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
  
  return (
    <>
      <Header />
      <Container fixed sx={{backgroundColor : theme.palette.primary.main, minHeight : "100vh", minWidth : "100vw", display : "flex", justifyContent : "center", pb : 10}}>
        {
          isDesktopDisplay ? renderDesktopHome() : renderMobileHome()
        }
      </Container>
      <IconButton size="large" sx={{position : "fixed", bottom : 20, right : 20, zIndex : 2}} onClick={handleWhatsappOnClick}>
        <Box component="div" sx={{borderRadius: "50%", width: {xxs : 50, md : 80}, height : {xxs : 50, md : 80}, backgroundColor : "#25D366", display : "flex", alignItems : "center", justifyContent : "center"}}>
          <WhatsAppIcon sx={{fontSize : {xxs : 35, md : 55}, color : "white"}} />
        </Box>
      </IconButton>
      <Footer />  
    </>
  );
}

export default Home