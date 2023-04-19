import React from 'react'
import Container from "./Header.styled";
import Button from "../button/Button";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="header-inner-container">
        <div className="header-logo" onClick={() => navigate("/")}>
          <img src="/assets/logo.png" alt="Bienvenue Logo"/>
        </div>
        <div className="header-pages">
          <ul className="header-nav">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/menu")}>Menu</li>
            <li onClick={() => navigate("/history")}>History</li>
            <li onClick={() => navigate("/reservation")}>Reservation</li>
          </ul>
          <div className="header-register-login">
            <Button variant="primary" onClick={() => navigate("/register")}>Register</Button>
            <Button variant="secondary" onClick={() => navigate("/login")}>Login</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Header