import React from 'react'
import {styled} from "@mui/system"
import {
  Box, Menu, IconButton, MenuItem, Typography, Tooltip, Avatar, Button
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

// styles
const HeaderMobileButton = styled(Button)(({theme}) => ({
  fontSize : 10,
  color : "white",
  padding : 5,
}))


const HeaderMobile = (props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: "flex", flexBasis: "15%" }}>
        <IconButton
          size="small"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={props.handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={props.anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(props.anchorElNav)}
          onClose={props.handleCloseNavMenu}
          sx={{
            display: "block",
          }}
        >
          {props.pages.map((page) => (
            <MenuItem key={page} onClick={props.handleCloseNavMenu}>
              <Typography textAlign="center" sx={{fontSize: 16}}>{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box component="div" onClick={() => props.navigate("/")} sx={{display : "flex", width: "100%", justifyContent: "center", flexBasis : "70%"}}>
        <img
          src="/assets/logo.png"
          alt="Bienvenue Logo"
          style={{ maxHeight : 40, marginLeft : 25 }}
        />
      </Box>
      {
        !props.user ? (
          <Box sx={{ display: "flex", flexBasis: "15%", justifyContent : "flex-end" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={props.handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{width : 30, height : 30}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={props.anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(props.anchorElUser)}
              onClose={props.handleCloseUserMenu}
            >
              {props.settings.map((setting) => (
                <MenuItem key={setting} onClick={props.handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{fontSize: 16}}>{setting}</Typography>
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
}

export default HeaderMobile