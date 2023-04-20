import React, {useContext} from 'react'
import Container from "./Header.styled";
import Button from "../button/Button";
import {AuthContext} from "../../context/AuthContext"; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const navigate = useNavigate();
  const {user, dispatch} = useContext(AuthContext);

  const handleLogout = async() => {
    await axios.get("/auth/logout");
    dispatch({type : "LOGOUT"})
  }

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
            <li onClick={() => {
              user !== null ? navigate("/reservation") : navigate("/login")
            }}>Reservation</li>
          </ul>
          <div className="header-register-login">
            {
              user===null ? (
                <>
                  <Button variant="primary" onClick={() => navigate("/register")}>Register</Button>
                  <Button variant="secondary" onClick={() => navigate("/login")}>Login</Button>
                </>
              ) :
              (
                <Button variant="secondary" onClick={handleLogout}>Logout</Button>
              )
            }
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Header