import React from 'react'
import {Typography, Box} from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

import Grid from "@mui/material/Unstable_Grid2"

const FooterMobile = (props) => {
  return (
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

      <Grid container direction="column" gap={1}>
        <Typography variant="h5" sx={{mb : 1}}>Menu</Typography>
        <Typography variant="body3">Steak</Typography>
        <Typography variant="body3">Spaghetti</Typography>
        <Typography variant="body3">Snack</Typography>
        <Typography variant="body3">Salad</Typography>
        <Typography variant="body3">Drink</Typography>
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
  )
}

export default FooterMobile;