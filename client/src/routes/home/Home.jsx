import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'react-simple-snackbar';
import { AuthContext } from '../../context/AuthContext';

import Container from "@mui/material/Container";
import {useTheme} from "@mui/material/styles";
import useWindowSize from '../../hooks/useWindowSize';
import IconButton from "@mui/material/IconButton";
import useFetch from '../../hooks/useFetch';
import Box from "@mui/material/Box";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import HomeMobile from "./Home.mobile";
import HomeDesktop from './Home.desktop';


const Home = () => {
  const [discountedMenu, setDiscountedMenu] = useState([]);
  const isDesktopDisplay = useWindowSize();
  const {user} = useContext(AuthContext)
  
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const {data, loading, error} = useFetch("/menus");
  
  const handleWhatsappOnClick = () => {
    const message = "Hi, I'd like to ask something";
    const whatsappURL = `https://wa.me/+6285925025265?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  }

  const handleOrderNowOnClick = () => {
    navigate("/menu")
  }

  const handleAboutUsOnClick = () => {
    openSnackbar("'About Us' page is still in progress...")
  }

  const handleMakeReservationOnClick = () => {
    if(user){
      navigate("/reservation")
    } else {
      navigate("/reservation", {state : {msg : "You must register/log in to make reservation"}})
    }
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
    (!loading && !error) && setDiscountedMenu(data.data.filter(menu => menu.discount > 0))
  }, [data, loading, error])

  useEffect(() => {
    if (location.state) {
      location.state.from === "reservation" && openSnackbar("You have to log in first to make reservations")
    }
  }, [])

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

  const props = {
    multipleServices,
    loading,
    discountedMenu,
    theme,
    reviews,
    user,
    discountedMenuLoadingError : error,
    handleOrderNowOnClick,
    handleAboutUsOnClick,
    handleMakeReservationOnClick
  }

  return (
    <>
      <Header />
      <Container fixed sx={{backgroundColor : theme.palette.primary.main, minHeight : "100vh", minWidth : "100vw", display : "flex", justifyContent : "center", pb : 10}}>
        {
          isDesktopDisplay ? <HomeDesktop {...props} /> : <HomeMobile {...props} />
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