import React from 'react'

import Container from "./Home.styled"
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="home-inner-container">
          <div className="home-part-1">
            <div className="home-part-1-left">
              <h1 className="home-part-1-title">We Serve The Taste You Love</h1>
              <div>
                Bienvenue is a type of restaurant which typically serve food or
                drinks in addiction to light refreshments such as baked good food.
              </div>
              <button>Order Now</button>
            </div>
            <div className="home-part-1-right">
              <img src="/assets/home-pic1.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Home