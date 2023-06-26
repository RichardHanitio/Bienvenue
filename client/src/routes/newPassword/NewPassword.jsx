import React, {useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {useSnackbar} from "react-simple-snackbar";
import axios from "axios";

import {Container, Typography, Box, TextField, IconButton, Link, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {useTheme} from "@mui/material/styles";
import {Visibility, VisibilityOff} from "@mui/icons-material"

import {AuthContext} from "../../context/AuthContext";
import useWindowSize from "../../hooks/useWindowSize";
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';

const NewPassword = () => {
  const navigate = useNavigate();
  const {user, loading, error, dispatch} = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email : undefined,
    password : "",
  });
  const [resetPasswordEmail, setResetPasswordEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar({position : "top-right"});
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const isDesktopDisplay = useWindowSize();

  const handleClickShowPassword = () => setShowPassword(show => !show)

  useEffect(() => {
  })


  const handleResetPassword = async() => {
    setOpenDialog(false);
    if(resetPasswordEmail==="" || !/^.+@.+\..+$/.test(resetPasswordEmail)) {
      openSnackbar("Please enter a valid email address")
    } else {
      const res = await axios.post(`/users/reset-password`, {email : resetPasswordEmail})
      res.status !== 200 ? openSnackbar("Something went wrong. Please try again") : openSnackbar("The reset instruction has been sent. Please check your inbox")
    }
  }

  return (
    <>
      <Header />
      <Container fixed sx={{height : "100vh", minWidth : "100vw", display : "flex", flexDirection : "column", alignItems : "center"}}>
        <Grid container sx={{width : "100vw", height : "100vh", backgroundColor : theme.palette.primary.main}} alignItems = "center" justifyContent = "center">
          <Box component="form" sx={{width : {xxs : "90%", sm : "60%", md : "50%"}, minHeight : { xxs : "65%", md : "60%"}}}>
            <Typography sx={{typography : {xxs : "h3", md : "h2"}, color : "white", mb : 3, textAlign : {xxs : "center", md : "start"}}}>New Password</Typography>
            <Typography sx={{typography : {xxs : "body3", md : "body2"}, color : "white", mb : 4, textAlign : {xxs : "center", md : "start"}}}>Ready to satisfy your taste buds? Login and unlock a world of flavors waiting for you at Bienvenue!</Typography>
            <TextField 
              margin="normal"
              label="New Password" 
              name="password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              size="small"
              fullWidth
              required
              InputProps={{
                endAdornment : (
                  <IconButton onClick={handleClickShowPassword}>
                    {
                      showPassword 
                        ? <VisibilityOff sx={{color : "white"}}/>
                        : <Visibility sx={{color : "white"}}/>
                    }
                  </IconButton>
                )
              }}
              value={credentials.password}
            />
            <TextField 
              margin="normal"
              label="Reenter New Password" 
              name="password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              size="small"
              fullWidth
              required
              InputProps={{
                endAdornment : (
                  <IconButton onClick={handleClickShowPassword}>
                    {
                      showPassword 
                        ? <VisibilityOff sx={{color : "white"}}/>
                        : <Visibility sx={{color : "white"}}/>
                    }
                  </IconButton>
                )
              }}
              value={credentials.password}
            />
            <Grid container sx={{mt : 1}}>
              <Grid sx={{flex : 1}}>
                <Link href="#" onClick={() => setOpenDialog(true)} sx={{typography : {xxs : "body3", md : "body2"}, color : "white"}}>Forgot password?</Link>
              </Grid>
              <Grid>
                <Link href="/register" sx={{ typography : {xxs : "body3", md : "body2"}, color : "white"}}>Don't have an account? Register</Link>
              </Grid>
            </Grid>
            
            <Button type="submit" variant="contained" fullWidth sx={{mt : 6}}>
              <Typography sx={{typography : {xxs : "body2", md : "body1"}}}>Login</Typography>  
            </Button>
              
            <Typography textAlign="center" sx={{mt : 3, color : "white", typography : {xxs : "body3", md : "body2"}}}>OR</Typography>

            <Grid container>
              <Grid xxs={6} sx={{display : "flex", alignItems : "center", justifyContent : "center"}}>
                <Button variant="contained" 
                  sx={{
                    mt : 3, 
                    backgroundColor : "white",
                    color : theme.palette.primary.main,
                    width : {xxs : "80%", md : "70%"},
                    ":hover" : {
                      backgroundColor : "#F0F0F0"
                    }
                  }}
                >
                  <Box component="div" sx={{width : "100%", display : "flex", alignItems : "center", justifyContent : "space-around"}}>
                    <img src="/assets/google.png" alt="google" style={{width : "30px"}}/>
                    <Typography variant="body2">Google</Typography>
                  </Box>
                </Button>
              </Grid>
              <Grid xxs={6} sx={{display : "flex", alignItems : "center", justifyContent : "center"}}>
                <Button variant="contained" 
                  sx={{
                    mt : 3, 
                    backgroundColor : "white",
                    color : theme.palette.primary.main,
                    width : {xxs : "80%", md : "70%"},
                    ":hover" : {
                      backgroundColor : "#F0F0F0"
                    }
                  }}
                >
                  <Box component="div" sx={{width : "100%", display : "flex", alignItems : "center", justifyContent : "space-around"}}>
                    <img src="/assets/facebook.png" alt="google" style={{width : "30px"}}/>
                    <Typography variant="body2">Facebook</Typography>
                  </Box>
                </Button>
              </Grid>
            </Grid> 
          </Box>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default NewPassword