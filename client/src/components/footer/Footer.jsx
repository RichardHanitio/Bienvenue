import React from 'react'
import {AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineTwitter} from "react-icons/ai";

// import Container from './Footer.styled'

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const theme = useTheme();

  return (
    <Container sx={{backgroundColor : theme.palette.primary.light, width : "100%", height : 850, display : "flex", alignItems : "center", justifyContent : "center"}}>
      <Grid 
        container 
        direction="column" 
        alignItems="center" 
        justifyContent="space-around"
        sx={{width : "95%", height : "95%", color : "white", textAlign : "center"}}
      >
        <Grid>
          <img src="/assets/logo.png" alt="logo"/>
        </Grid>
        <Grid>
          <Typography variant="h4" sx={{mb : 1}}>Social Media</Typography>
          <Box sx={{display : "flex", alignItems : "center"}}>
            <InstagramIcon sx={{mr : 1}}/>
            <Typography variant="body2">bienvenue.official</Typography>
          </Box>
          <Box sx={{display : "flex", alignItems : "center" }}>
            <WhatsAppIcon sx={{mr : 1}}/>
            <Typography variant="body2">+621390320459</Typography>
          </Box>
          <Box sx={{display : "flex"}}>
            <TwitterIcon sx={{mr : 1}}/>
            <Typography variant="body2">bienvenue.official</Typography>
          </Box>
        </Grid>

        <Grid>
          <Typography variant="h4" sx={{mb : 1}}>Menu</Typography>
          <Typography variant="body2">Steak</Typography>
          <Typography variant="body2">Spaghetti</Typography>
          <Typography variant="body2">Snack</Typography>
          <Typography variant="body2">Salad</Typography>
          <Typography variant="body2">Drink</Typography>
        </Grid>

        <Grid>
          <Typography variant="h4" sx={{mb : 1}}>Support</Typography>
          <Typography variant="body2">Contact Us</Typography>
          <Typography variant="body2">About Us</Typography>
        </Grid>

        <Grid>
          <Typography variant="h4" sx={{mb : 1}}>Address</Typography>
          <Typography variant="body2">Jl. Letjen S Parman No. 58, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20111</Typography>
        </Grid>

        <Grid>
          <Typography variant="h4" sx={{mb : 1}}>Operational Hours</Typography>
          <Typography variant="body2">Monday - Sunday 08.00 - 23.00 (GMT+7)</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer