import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useSnackbar} from "react-simple-snackbar";
import axios from "axios";

import {Container, Typography, Box, TextField, IconButton, Link, Button} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {useTheme} from "@mui/material/styles";
import {Visibility, VisibilityOff} from "@mui/icons-material"

import {AuthContext} from "../../context/AuthContext";
import useWindowSize from "../../hooks/useWindowSize";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const isDesktopDisplay = useWindowSize();

  const handleChangeEmail = (e) => setEmail(e.target.value);

  const handleResetPassword = (e) => {

  }

  return (
    <Container fixed sx={{height : "100vh", minWidth : "100vw", display : "flex", flexDirection : "column", alignItems : "center", justifyContent : "center", backgroundColor : theme.palette.primary.main}}>
      <Box component="form" sx={{backgroundColor : "green", width : {xxs : "90%", sm : "60%", md : "30%"}, minHeight : { xxs : "65%", md : "60%"}}}>
        <Typography sx={{typography : {xxs : "h3", md : "h2"}, color : "white", mb : 3, textAlign : {xxs : "center", md : "start"}}}>Reset Password</Typography>
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
          value={email}
          onChange={handleChangeEmail}
        />
        
        <Button type="submit" variant="contained" fullWidth sx={{mt : 6}} onClick={handleResetPassword}>
          <Typography sx={{typography : {xxs : "body2", md : "body1"}}}>Send Reset Instruction</Typography>  
        </Button>
      </Box>
    </Container>
  )
}

export default ForgetPassword