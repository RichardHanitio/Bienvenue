import React from 'react'
import Container from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <div className="header-inner-container">
        <div className="header-logo">
          <img src="/assets/logo.png" alt="Bienvenue Logo" />
        </div>
        <div className="header-pages">
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Gallery</li>
            <li>About</li>
            <li>Reservations</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Header