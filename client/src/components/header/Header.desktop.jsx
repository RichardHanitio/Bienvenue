import React from 'react'
import {styled} from "@mui/system"
import {
  Box, Menu, IconButton, MenuItem, Typography, Tooltip, Avatar, Button
} from "@mui/material"

// styles
const HeaderListButton = styled(Button)(({theme}) => ({
  margin : "20px 0",
  display : "block",
  fontSize : "16px",
  color : "white"
}))

const HeaderButton = styled(Button)(({type, theme}) => ({
  margin : "10px 15px",
  display : "block",
  backgroundColor : type==="login" && "white",
  color : type==="register" && "white",
  '&:hover' : {
    backgroundColor : type==="login" && "#B5B5B5"
  }
}))

const HeaderDesktop = (props) => {
  return (
    <>
      <Box component="div" onClick={() => props.navigate("/")} sx={{display: "flex"}}>
        <img src="/assets/logo.png" alt="Bienvenue Logo" style={{ maxHeight: 60 }}/> 
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-around"}}>
        {props.pages.map((page) => (
          <HeaderListButton key={page} onClick={() => console.log(`${page} clicked`)} variant="text">
            {page}
          </HeaderListButton>
        ))}
      </Box>
      {
        props.user ? (
          <Box sx={{ display: "flex", justifyContent : "center", flexBasis : "10%"}}>
            <Tooltip title="Open settings">
              <IconButton onClick={props.handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
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
}

export default HeaderDesktop