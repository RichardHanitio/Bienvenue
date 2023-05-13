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


const Home = () => {
  const navigate = useNavigate();
  const {items, dispatch} = useContext(ReserveContext);
  const {user} = useContext(AuthContext);
  const [discountedMenu, setDiscountedMenu] = useState([]);
  const isDesktopDisplay = useWindowSize();
  
  const theme = useTheme();

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
    <Grid container spacing={2} sx={{display : "flex", justifyContent : "center", width : 1600}}>
      <Grid container xs={11} sx={{height : 500}}>
        <Grid container direction="column" sx={{flexBasis : "55%", justifyContent : "space-around", mt : 10}}>
          <Grid>
            <Typography sx={{typography : {lg : "h1", md : "h2"}, color : "white", textAlign : "justify"}}>We Serve The Taste You Love</Typography>
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
    </Grid>
  )

  const renderMobileHome = () => (
    <Grid container  gap={10} sx={{display : "flex", justifyContent : "center", width : "95%"}}>
      <Grid container xs={11} sx={{height : 580, justifyContent : "center"}}>
        <Grid container alignItems="center" justifyContent="center" sx={{height : 300, width : 300}}>
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
            <Typography variant="h3" sx={{color : "white", textAlign : "center"}}>We Serve The Taste You Love</Typography>
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

      <Grid container xs={11} sx={{height : 580, justifyContent : "center"}}>
        <Grid container justifyContent="space-around" direction="column">
          <Grid>
            <Typography variant="h3" sx={{color : "white", textAlign : "center"}}>Special Offer Just For Today</Typography>
          </Grid>
          <Grid>
            <Typography variant="body2" sx={{textAlign : "center",  color : "white"}}>
              Bienvenue is a type of restaurant which typically serve food or drinks in addition to light refreshments such as baked good food.
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" sx={{height : 300, width : 300}}>
          <img src="/assets/home-pic-1.png" alt="" style={{height : "100%", width: "100%"}} />
        </Grid>
      </Grid>
    </Grid>
  )

  return (
    <>
      <Header />
      <Container fixed sx={{backgroundColor : theme.palette.primary.main, minHeight : "100vh", minWidth : "100vw", display : "flex", justifyContent : "center"}}>
        {
          isDesktopDisplay ? renderDesktopHome() : renderMobileHome()
        }
      </Container>

      {/* <Container>
        <div className="home-inner-container">
          <div className="home-part-1">
            <div className="home-part-1-left">
              <div className="home-part-1-left-inner">
                <h1 className="home-part-1-title">
                  We Serve The Taste You Love
                </h1>
                <div className="home-part-1-desc">
                  Bienvenue is a type of restaurant which typically serve <br />{" "}
                  food or drinks in addiction to light refreshments such as{" "}
                  <br /> baked good food.
                </div>
                <Button
                  className="home-part-1-order"
                  variant="primary"
                  width="200px"
                  height="60px"
                  onClick={() => navigate("/menu")}
                >
                  Order Now
                </Button>
              </div>
            </div>
            <div className="home-part-1-right">
              <img src="/assets/home-pic-1.png" alt="" />
            </div>
          </div>

          <div className="home-part-2">
            <div className="home-part-2-left">
              <img src="/assets/home-pic-2.png" alt="" />
            </div>
            <div className="home-part-2-right">
              <h1 className="home-part-2-title">
                We Are More Than Multiple Services
              </h1>
              <div className="home-part-2-services">
                <div className="service service-1">
                  <img src="/assets/services24hr.png" alt="Services 24/7" />
                  <div>Services 24/7</div>
                </div>
                <div className="service service-2">
                  <img
                    src="/assets/pre-reservation.png"
                    alt="Pre-Reservation"
                  />
                  <div>Pre-Reservation</div>
                </div>
                <div className="service service-3">
                  <img src="/assets/clean-kitchen.png" alt="Clean Kitchen" />
                  <div>Clean Kitchen</div>
                </div>
                <div className="service service-4">
                  <img src="/assets/superchefs.png" alt="Super Chefs" />
                  <div>Super Chefs</div>
                </div>
                <div className="service service-5">
                  <img
                    src="/assets/organized-foodie-place.png"
                    alt="Organized Foodie Place"
                  />
                  <div>Organized Foodie Place</div>
                </div>
              </div>
            </div>
          </div>

          <div className="home-part-3">
            <h1 className="home-part-3-title">Special Offer Just For Today</h1>
            <div className="home-part-3-offers">
              {
                discountedMenu.length > 0 ? (
                  discountedMenu.map((menu, index) => (
                    <div className="offer" key={index}>
                      <div className="offer-inner">
                        <div className="offer-left">
                          <img src={menu.img} alt={menu.name} />
                        </div>
                        <div className="offer-right">
                          <h1 className="home-part-3-offer-title">
                            {menu.name}
                          </h1>
                          <div className="home-part-3-offer-rating">
                            <RatingStars amount={menu.rating} />
                          </div>
                          <div className="home-part-3-offer-desc">
                            {menu.longDesc}
                          </div>
                          <div className="home-part-3-offer-pricing">
                            <div className="prices">
                              <div className="discounted-price">
                                IDR {menu.price}/gr
                              </div>
                              <div className="real-price">
                                IDR {menu.price}/gr
                              </div>
                            </div>
                            <Button variant="secondary" value={menu.name} onClick={handleAddItemToCart}>Add to Cart</Button>
                          </div>   
                        </div>  
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-offers">Sorry, no special offers today</div>
                )
              }
            </div>
          </div>
        </div>

        <div className="home-part-4">
          <div className="home-part-4-inner-container">
            <div className="home-part-4-left">
              <h1 className="home-part-4-left-title">
                Do you have any dinner plan tonight? <br />Reserve your table
              </h1>
              <Button variant="primary" width="230px" height="50px" onClick={() => {
                user !== null ? navigate("/reservation") : navigate("/login")
              }}>Make Reservation</Button>
            </div>
            <div className="home-part-4-right">
              <img src="assets/reserve.png" alt="" />
            </div>
          </div>
        </div>
        
        <div className="home-inner-container">
          <div className="home-part-5">
            <div className="home-part-5-inner-container">
              <h1 className="home-part-5-title">
                What our customers say?
              </h1>
              <div className="home-part-5-reviews">
                {
                  reviews.map(({name, position, img, comment}) => (
                    <div className="review">
                      <div className="review-inner-container">
                        <div className="comment">
                          "{comment}"
                        </div>
                        <div className="profile">
                          <img src={img} alt={name} />
                          <div className="name-position">
                            <div>{name}</div>
                            <div>{position}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

      </Container> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home