import React from 'react'

import {Typography, Box, Button, Card, CardMedia, CardContent} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2";
import RatingStars from '../../components/ratingstars/RatingStars';
import { Watch } from 'react-loader-spinner';

const MenuMobile = (props) => {
  return (
    <>
    <Grid container sx={{justifyContent : "center", alignItems : "center", width : "100%", height : 80}}>
      <Typography variant="h3" sx={{color : "white", textAlign : "center"}}>Menu Pack</Typography>
    </Grid>
    <Grid container sx={{height : 110, width : "100%", justifyContent : "space-around", mb : 2}}>
      {
        props.categories.map(category => (
          <Grid xxs={4} sm={2}>
            <Box sx={{width : "100%", height : "100%", display : "flex", alignItems : "center", justifyContent : "center"}}>
              <Button variant="contained" color={props.active===category ? "primary" : "secondary"} onClick={() => props.setActive(category)} sx={{width : "90%"}}>
                <Typography variant="body3">{category}</Typography> 
              </Button>
            </Box>
          </Grid>
        ))
      }
    </Grid>
    <Grid container sx={{minHeight : "100%", width : "100%", justifyContent : "space-around"}}>
      {
        props.filteredData ? props.filteredData.map(data => (
          <Card raised xxs={6} sm={4} sx={{margin : "20px 0", width : {xxs : "48%", sm : "30%"}, height : 380}}>
            <CardMedia
              sx={{ height: 160 }}
              image={data.img}
            />
            <CardContent sx={{textAlign: "center", display : "flex", flexDirection : "column", alignItems : "center", justifyContent : "space-around", height : 220}}>
              <Typography variant="h5" gutterBottom component="div" textAlign="center">
                {data.name}
              </Typography>
              <Box sx={{display : "flex", justifyContent : "center", margin : "5px 0"}}>
                <RatingStars amount={3} width={16} height={16}/>
              </Box>
              <Typography variant="body4" component="div" sx={{mb : 2}} textAlign="center">
                {data.desc.length > 30 ? data.desc.slice(0, 30)+"..." : data.desc}
              </Typography>
              <Box component="div" sx={{display : "flex", flexDirection : "column", justifyContent : "space-between"}}>
                <Box component="div" sx={{mb : 1}}>
                  <Typography variant="body3">
                    IDR {data.price}k/gr
                  </Typography>
                </Box>
                <Button variant="contained" color="secondary" sx={{fontSize : 12}}>Add to Cart</Button>
              </Box>
            </CardContent>
          </Card>
        )) : <Watch
          height="50"
          width="50"
          radius="48"
          color="white"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      }
    </Grid>
    </>
  )
}

export default MenuMobile