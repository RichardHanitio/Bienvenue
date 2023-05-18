import React from 'react'
import {Typography, Box} from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

import Grid from "@mui/material/Unstable_Grid2"

const FooterDesktop = (props) => {
  return (
    <Grid 
      container 
      sx={{width : 1600, height : "95%", color : "white", textAlign : "center"}}
    >
      <Grid container md={3} sx={{height : "100%"}}>
        <Grid container sx={{minWidth : "100%", alignItems : "center", justifyContent : "center"}}>
          <img src="/assets/logo.png" alt="logo" style={{width : 250}}/>
        </Grid>
        <Grid container sx={{minWidth : "100%", justifyContent : "center"}}>
          <Grid sx={{width : 250}}>
            <Typography variant="h3" sx={{mb : 2, textAlign : "start"}}>Social Media</Typography>
            <Box sx={{display : "flex", alignItems : "center"}}>
              <InstagramIcon sx={{mr : 1}}/>
              <Typography variant="body1">bienvenue.official</Typography>
            </Box>
            <Box sx={{display : "flex", alignItems : "center"}}>
              <WhatsAppIcon sx={{mr : 1}}/>
              <Typography variant="body1">+621390320459</Typography>
            </Box>
            <Box sx={{display : "flex", alignItems : "center"}}>
              <TwitterIcon sx={{mr : 1}}/>
              <Typography variant="body1">bienvenue.official</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      
      <Grid container direction="column" alignItems="center" justifyContent="center" sx={{height : "100%"}} md={2}>
        <Box sx={{textAlign : "start", height : 300}}>
          <Typography variant="h3" sx={{mb : 2}}>Menu</Typography>
          <Typography variant="body1">Steak</Typography>
          <Typography variant="body1">Spaghetti</Typography>
          <Typography variant="body1">Snack</Typography>
          <Typography variant="body1">Salad</Typography>
          <Typography variant="body1">Drink</Typography>
        </Box>
      </Grid>
      
      <Grid container direction="column" alignItems="center" justifyContent="center" sx={{height : "100%"}} md={3}>
        <Box sx={{textAlign : "start", height : 300}}>
          <Typography variant="h3" sx={{mb : 2}}>Support</Typography>
          <Typography variant="body1">Contact Us</Typography>
          <Typography variant="body1">About Us</Typography>
        </Box>
      </Grid>

      <Grid container direction="column" alignItems="center" justifyContent="center" sx={{height : "100%"}} md={4}>
        <Box sx={{textAlign : "start", height : 300}}>
          <Grid sx={{mb : 5}}>
            <Typography variant="h3" sx={{mb : 1}}>Address</Typography>
            <Typography variant="body2">Jl. Letjen S Parman No. 58, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20111</Typography>
          </Grid>

          <Grid>
            <Typography variant="h3" sx={{mb : 1}}>Operational Hours</Typography>
            <Typography variant="body2">Monday - Sunday 08.00 - 23.00 (GMT+7)</Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FooterDesktop