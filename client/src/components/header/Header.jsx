import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";

import { HeaderAppBar, HeaderButton, HeaderMobileButton, HeaderListButton } from "./Header.styled";

const Header = () => {
  const navigate = useNavigate();
  const [isDesktopDisplay, setIsDesktopDisplay] = useState(true);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, dispatch } = useContext(AuthContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setIsDesktopDisplay(matches)
  }, [matches])


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
  const pages = ["home", "menu", "history", "about"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"]



  const renderDesktopHeader = () => (
    <>
      <Box component="div" onClick={() => navigate("/")} sx={{display: "flex"}}>
        <img src="/assets/logo.png" alt="Bienvenue Logo" style={{ maxHeight: 60 }}/> 
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-around"}}>
        {pages.map((page) => (
          <HeaderListButton key={page} onClick={() => console.log(`${page} clicked`)} variant="text">
            {page}
          </HeaderListButton>
        ))}
      </Box>
      {
        user ? (
          <Box sx={{ display: "flex", justifyContent : "center", flexBasis : "10%"}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {console.log(user.data.username)}
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "space-around"}}>
            <HeaderButton type="register" onClick={() => console.log(`Register clicked`)} variant="contained">
              Register
            </HeaderButton>
            <HeaderButton type="login" onClick={() => console.log(`Login clicked`)} variant="outlined">
              Login
            </HeaderButton>
          </Box>
        )
      }
    </>
  )

  const renderMobileHeader = () => (
    <>
      <Box sx={{ flexGrow: 1, display: "flex", flexBasis: "15%" }}>
        <IconButton
          size="small"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center" sx={{fontSize: 12}}>{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box component="div" onClick={() => navigate("/")} sx={{display : "flex", width: "100%", justifyContent: "center", flexBasis : "70%"}}>
        <img
          src="/assets/logo.png"
          alt="Bienvenue Logo"
          style={{ maxHeight : 40, marginLeft : 25 }}
        />
      </Box>
      {
        user ? (
          <Box sx={{ display: "flex", flexBasis: "15%", justifyContent : "flex-end" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{width : 30, height : 30}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{fontSize: 12}}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: "flex", flexBasis: "15%"}}>
            <HeaderMobileButton onClick={() => console.log(`Register clicked`)} variant="text">
              Register
            </HeaderMobileButton>
            <HeaderMobileButton onClick={() => console.log(`Login clicked`)} variant="text">
              Login
            </HeaderMobileButton>
          </Box>
        )
      }
    </>
  )

  return (
    <HeaderAppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {
            isDesktopDisplay ? renderDesktopHeader() : renderMobileHeader()
          }
        </Toolbar>
      </Container>
    </HeaderAppBar>
  );
};

export default Header;
