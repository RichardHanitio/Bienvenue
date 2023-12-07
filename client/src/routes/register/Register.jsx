import React, {useContext, useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useSnackbar } from "react-simple-snackbar";

import {Container, Typography, Box, TextField, Button, Link} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {useTheme} from "@mui/material/styles";
import { makeRequest } from '../../requests';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import {AuthContext} from "../../context/AuthContext";
import useWindowSize from "../../hooks/useWindowSize";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {dispatch} = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email : "",
    name : "",
    phoneNum : "",
    password : "",
    confirmPassword : "",
  });
  const [openSnackbar, closeSnackbar] = useSnackbar({position : "top-right"});
  const theme = useTheme();
  const isDesktopDisplay = useWindowSize();

  useEffect(() => {
    if (location.state && location.state.msg) {
      openSnackbar(location.state.msg, 2000)
    }
  }, [])
  
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
    if(credentials.name==="" || !/^[A-Za-z\s]+$/.test(credentials.name)) {
      openSnackbar("Please enter a valid name")
      isValid = false;
    }
    if(credentials.phoneNum==="" || credentials.phoneNum.length < 9 || credentials.phoneNum.length > 12) {
      openSnackbar("Please enter a valid phone number")
      isValid = false;
    }
    if(credentials.password==="" || credentials.password.length < 6) {
      openSnackbar("Password must have at least 6 characters")
      isValid = false;
    }
    if (credentials.password !== credentials.confirmPassword) {
      openSnackbar("Password does not match");
      console.log("password : ", credentials.password);
      console.log("confirmPassword : ", credentials.confirmPassword);
      isValid = false;
    }
    return isValid;
  }

  const handleSubmitCredentials = async(e) => {
    e.preventDefault();
    const {confirmPassword, ...creds} = credentials;
 
    const isValidCredentials = checkCredentials(credentials);
    if(isValidCredentials) {
      try {
        await makeRequest({url: "/auth/register", method: "post", body : creds})
        openSnackbar("Registration successful");
        // auto login after registration
        dispatch({type : "LOGIN_START"})
        const res = await makeRequest({url : "/auth/login", method : "post", body : {
          email : credentials.email,
          password : credentials.password
        }})
        dispatch({type : "LOGIN_SUCCESS", payload : res.data})
        navigate("/");
      } catch(e) {
        openSnackbar("Error : ", e.response.data.msg)
      }
    }
  }

  return (
    <Container fixed sx={{height : "100vh", minWidth : "100vw", display : "flex", flexDirection : "column", alignItems : "center"}}>
      <Box sx={{backgroundColor : "rgba(255,255,255,.5)", borderRadius : "50%", width : 50, height : 50, position : "absolute", left : 50, top : 30, cursor : "pointer", "&:hover" : {backgroundColor : "rgba(255,255,255,.7)"}}} onClick={() => navigate(-1)}>
        <ChevronLeftIcon sx={{fontSize : 50, color : "black"}}/>
      </Box>
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
            <Typography sx={{typography : {xxs : "h3", md : "h2"}, color : "white", mb : 3, textAlign : {xxs : "center", md : "start"}}}>Create Account</Typography>
            <Typography sx={{typography : {xxs : "body3", md : "body2"}, color : "white", mb : 4, textAlign : {xxs : "center", md : "start"}}}>Enter your personal details to get reservation access and weekly discounts</Typography>
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
              label="Name" 
              name="name"
              variant="outlined"
              type="text"
              size="small"
              fullWidth
              required
              value={credentials.name}
              onChange={handleCredentialChange}
            />
            <TextField 
              margin="normal"
              label="Phone Number" 
              name="phoneNum"
              variant="outlined"
              type="tel"
              size="small"
              fullWidth
              required
              value={credentials.phoneNum}
              onChange={handleCredentialChange}
            />
            <TextField 
              margin="normal"
              label="Password" 
              name="password"
              type="password"
              variant="outlined"
              size="small"
              fullWidth
              required
              value={credentials.password}
              onChange={handleCredentialChange}
            />
            <TextField 
              margin="normal"
              label="Confirm Password" 
              name="confirmPassword"
              type="password"
              variant="outlined"
              size="small"
              fullWidth
              value={credentials.confirmPassword}
              onChange={handleCredentialChange}
            />

            <Button type="submit" variant="contained" fullWidth sx={{mt : 5}} onClick={handleSubmitCredentials}>
              <Typography sx={{typography : {xxs : "body2", md : "body1"}}}>Register</Typography>  
            </Button>
            <Box sx={{mt : 2}}>
              <Typography sx={{typography : {xxs : "body3", md : "body1", color : "white"}}}>
                Already have an account? 
                <Link href="/login" sx={{color : "white", ml : 1, textDecoration : "underline"}}>Login</Link>
              </Typography> 
            </Box>
            
              
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Register