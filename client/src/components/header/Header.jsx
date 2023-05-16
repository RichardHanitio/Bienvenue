import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {Container, Toolbar, AppBar} from "@mui/material";

import HeaderMobile from "./Header.mobile";
import HeaderDesktop from "./Header.desktop";
import useWindowSize from "../../hooks/useWindowSize";


const Header = () => {
  const navigate = useNavigate();
  const isDesktopDisplay = useWindowSize();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, dispatch } = useContext(AuthContext);

  // components controllers
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  };

  // logic controllers
  const handleLogout = async () => {
    await axios.get("/auth/logout");
    dispatch({ type: "LOGOUT" });
  };

  // constants
  const pages = ["Home", "Menu", "History", "About"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"]

  // props
  const props = {
    handleOpenNavMenu,
    handleCloseNavMenu,
    handleOpenUserMenu,
    handleCloseUserMenu, 
    anchorElNav,
    anchorElUser,   
    navigate,
    pages, 
    user, 
    settings
  }


  return (
    <AppBar position="sticky" sx={{maxHeight : 90, display : "flex", justifyContent : "center", alignItems : "center"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {
            isDesktopDisplay ? <HeaderDesktop {...props}/> : <HeaderMobile {...props} />
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
