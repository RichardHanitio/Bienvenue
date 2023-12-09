import React from 'react'
import {useNavigate} from "react-router-dom"
import { Container, Typography, Box, Button } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2"
import "slick-carousel/slick/slick.css";
import { useTheme } from '@mui/material/styles';
import {styled} from "@mui/system"

import "slick-carousel/slick/slick-theme.css";

const ErrorButton = styled(Button)(({theme}) => ({
  fontSize : theme.typography.h5.fontSize,
  fontWeight : theme.typography.h4.fontWeight,   
  padding : "10px 30px",
  height : 50,
  width : 250
}))

const Error = ({status, msg}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container fixed sx={{backgroundColor : theme.palette.primary.main, minHeight : "100vh", minWidth : "100vw", display : "flex", justifyContent : "center", alignItems : "center"}}>
      <Grid container direction="column" sx={{width : 1600, height : 600}}>
        <Grid sx={{flexBasis : "15%", display : "flex", alignItems : "center", justifyContent : "center"}}>
          <img src="/assets/logo.png" alt="Bienvenue Logo" />
        </Grid>
        <Grid sx={{flexBasis : "65%", display : "flex", flexDirection : "column", alignItems : "center", justifyContent : "center", color : "white"}}>
          <Typography sx={{fontSize : 160}}>{status || 404}</Typography>
          <Box sx={{width : "50%"}}>
            <Typography variant="body1" sx={{textAlign : "center"}}>
              {
                msg || "Oh dear! It appears you've stumbled upon a flavorless void on our digital menu. Our chefs are on high alert, trying to locate the missing dish, but it seems to have eluded them."
              }
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{flexBasis : "20%", display : "flex", alignItems : "center", justifyContent : "center"}}>
          <Box sx={{width : "40%", display : "flex", justifyContent : "space-around"}}>
            <ErrorButton variant="contained" color="primary" onClick={() => navigate("/")}>Back to Home</ErrorButton>
            <ErrorButton variant="contained" color="secondary" onClick={() => navigate(-1)}>Previous Page</ErrorButton>
          </Box>
        </Grid>
        
      </Grid>
    </Container>
  )
}

export default Error