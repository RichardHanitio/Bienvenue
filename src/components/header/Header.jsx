import React from 'react'
import Container from "./Header.styled";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="header-inner-container">
        <div className="header-logo">
          <img src="/assets/logo.png" alt="Bienvenue Logo" />
        </div>
        <div className="header-pages">
          <ul className="header-nav">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/menu")}>Menu</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/reservations")}>Reservations</li>
          </ul>
          <div className="header-register-login">
            <button type="button" className="header-btn header-register" onClick={() => navigate("/register")}>Register</button>
            <button type="button" className="header-btn header-login" onClick={() => navigate("/login")}>Login</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Header