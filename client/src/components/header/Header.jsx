import React, {useContext} from 'react'
// import Container from "./Header.styled";
// import Button from "../button/Button";
import {AuthContext} from "../../context/AuthContext"; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Header = () => {
  const navigate = useNavigate();
  const {user, dispatch} = useContext(AuthContext);

  const handleLogout = async() => {
    await axios.get("/auth/logout");
    dispatch({type : "LOGOUT"})
  }

  const pages = ["home", "menu", "history", "about"]

  return (
    <AppBar position="sticky" sx={{height : 110, display : "flex", justifyContent : "center", alignItems : "center"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="div" onClick={() => navigate("/")}>
            <img src="/assets/logo.png" alt="Bienvenue Logo"/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "space-around" }}>
            {
              pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => console.log(`${page} clicked`)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))
            }
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-around" }}>
            <Button
              onClick={() => console.log(`Register clicked`)}
              sx={{ my: 2, mx: 1, color: "white", display: "block" }}
              variant="contained"
            >
              Register
            </Button>
            <Button
              onClick={() => console.log(`Login clicked`)}
              sx={{ my: 2, mx: 1, color: "blue", display: "block", backgroundColor: "white" }}
              variant="outlined"
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      
      /* <div className="header-inner-container">
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
      </div> */
    /* </Container> */
  )
}

export default Header