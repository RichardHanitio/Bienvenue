import React from 'react'

// import Container from './Footer.styled'

import {Container, Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import useWindowSize from '../../hooks/useWindowSize';
import FooterDesktop from './Footer.dekstop';
import FooterMobile from './Footer.mobile';

const Footer = () => {
  const theme = useTheme();
  const isDesktopDisplay = useWindowSize();

  return (
    <Container fixed sx={{backgroundColor : theme.palette.primary.light, position : "relative", minWidth : "100vw", height : {xxs : 850, md : 450}, display : "flex", flexDirection : "column", alignItems : "center", justifyContent : "center"}}>
      {
        isDesktopDisplay ? <FooterDesktop /> : <FooterMobile />
      }
      <Box sx={{backgroundColor : theme.palette.primary.main, position : "absolute", bottom : 0, width : "100vw", textAlign : "center"}}>
        <Typography variant="body3" sx={{color : "white"}}>
          Copyright © 2023 Bienvenue. All rights reserved
        </Typography> 
      </Box>
    </Container>
  )
}

export default Footer