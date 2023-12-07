import React, { useContext, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {Container, Toolbar, AppBar} from "@mui/material";
import {useTheme} from "@mui/material/styles"

import { AuthContext } from "../../context/AuthContext";
import HeaderMobile from "./Header.mobile";
import HeaderDesktop from "./Header.desktop";
import useWindowSize from "../../hooks/useWindowSize";

import { makeRequest } from "../../requests";


const Header = () => {
  const navigate = useNavigate();
  const isDesktopDisplay = useWindowSize();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, dispatch } = useContext(AuthContext);
  const theme = useTheme();

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

  const handleLogout = async () => {
    handleCloseUserMenu();
    await makeRequest({url:"/auth/logout"});
    navigate("/")
    dispatch({ type: "LOGOUT" });
  };

  const pages = [
    {name : "Home", path : "/"},
    {name : "Menu", path : "/menu"}, 
    {name : "History", path : "/history"}, 
    {name : "Reservation", path : "/reservation"}, 
  ];
  const settings = ["Profile", "Account", "Dashboard", "Logout"]
  const currentLocation = useLocation().pathname;

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
    settings,
    currentLocation,
    theme,
    handleLogout
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
