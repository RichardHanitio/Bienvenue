import React from 'react'

import Container from "./Home.styled"
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <Container>
      <Header />
      <div className="home-inner-container">
        <div className="home-part-1">
          .
          <h1 className="home-part-1-title">We Serve The Taste You Love</h1>
          <div>
            Bienvenue is a type of restaurant which typically serve food or drinks in addiction to light refreshments such as baked good food.
          </div>
          <button>Order Now</button>
        </div>
      </div>
      <Footer />
    </Container>


  )
}

export default Home