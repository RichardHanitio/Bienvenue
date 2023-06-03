import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useSnackbar} from "react-simple-snackbar";
import axios from "axios";

import {Container, Typography, Box, TextField, IconButton, Link, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {useTheme} from "@mui/material/styles";
import {Visibility, VisibilityOff} from "@mui/icons-material"

import {AuthContext} from "../../context/AuthContext";
import useWindowSize from "../../hooks/useWindowSize";

const Login = () => {
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

  const handleCredentialChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name] : e.target.value,
    })
  }

  const checkCredentials = (credentials) => {
    let isValid = true;
    if(credentials.email==="" || !/^.+@.+\..+$/.test(credentials.email)) {
      openSnackbar("Please enter a valid email address")
      isValid = false;
    }
    if(credentials.password==="" || credentials.password.length < 6) {
      openSnackbar("Password must have at least 6 characters")
      isValid = false;
    }
    return isValid
  }

  const handleSubmitCredentials = async(e) => {
    e.preventDefault();
    const isValidCredentials = checkCredentials(credentials);
    if(isValidCredentials) {
      try {
        dispatch({type : "LOGIN_START"})
        const res = await axios.post("/auth/login", credentials)
        dispatch({type : "LOGIN_SUCCESS", payload : res.data})
        navigate("/");
      } catch(e) {
        openSnackbar(e.response.data.msg)
      }
    }
  }

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
    <Container fixed sx={{height : "100vh", minWidth : "100vw", display : "flex", flexDirection : "column", alignItems : "center"}}>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>
          <Typography variant="h3" sx={{color : theme.palette.primary.main}}>Reset Password</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body2">
              To reset your password, please enter your email address and follow the instructions sent to your registered email address 
            </Typography>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={resetPasswordEmail}
            onChange = {(e) => setResetPasswordEmail(e.target.value)}
            sx={{
              "& input" : {
                color : "#000000"
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleResetPassword}>Send</Button>
        </DialogActions>
      </Dialog>
      <Grid container sx={{width : "100vw", height : "100vh"}}>
        <Grid container md={5} sx={{backgroundColor : theme.palette.primary.main, display : isDesktopDisplay ? "flex" : "none"}} alignItems="center" justifyContent="center">
          <Grid container sx={{minWidth : "90%", minHeight : "50%"}} direction="column" alignItems="center" justifyContent="center" gap={4}>
            <Grid md={7} sx={{display : "flex", alignItems : "center", justifyContent : "center"}}>
              <img src="/assets/logo-large.png" alt="logo" className="login-logo"/>
            </Grid>
            <Grid md={5} sx={{minWidth : "80%"}}>
              <Typography variant="body2" sx={{textAlign : "center", color : "white", mb : 2}}>
                “Italian cuisine offers a wide canopy of incredibly diverse food dishes, and the best part of all these sumptuous dishes is that they are made from fresh and simple ingredients.”
              </Typography>
              <Typography variant="body2" sx={{textAlign : "center", color : "white"}}>
                ~ Chef Leonardo Bunucci
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xxs={12} md={7} sx={{backgroundColor : theme.palette.primary.light}} alignItems = "center" justifyContent = "center">
          <Box component="form" sx={{width : {xxs : "90%", sm : "60%", md : "50%"}, minHeight : { xxs : "65%", md : "60%"}}}>
            <Typography sx={{typography : {xxs : "h3", md : "h2"}, color : "white", mb : 3, textAlign : {xxs : "center", md : "start"}}}>Welcome Back!</Typography>
            <Typography sx={{typography : {xxs : "body3", md : "body2"}, color : "white", mb : 4, textAlign : {xxs : "center", md : "start"}}}>Ready to satisfy your taste buds? Login and unlock a world of flavors waiting for you at Bienvenue!</Typography>
            <TextField 
              margin="normal"
              label="Email" 
              name="email"
              variant="outlined"
              type="email"
              size="small"
              fullWidth
              required
              autoFocus
              value={credentials.email}
              onChange={handleCredentialChange}
            />
            <TextField 
              margin="normal"
              label="Password" 
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
              onChange={handleCredentialChange}
            />
            <Grid container sx={{mt : 1}}>
              <Grid sx={{flex : 1}}>
                <Link href="#" onClick={() => setOpenDialog(true)} sx={{typography : {xxs : "body3", md : "body2"}, color : "white"}}>Forgot password?</Link>
              </Grid>
              <Grid>
                <Link href="/register" sx={{ typography : {xxs : "body3", md : "body2"}, color : "white"}}>Don't have an account? Register</Link>
              </Grid>
            </Grid>
            
            <Button type="submit" variant="contained" fullWidth sx={{mt : 6}} onClick={handleSubmitCredentials}>
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
      </Grid>
    </Container>
  )
}

export default Login