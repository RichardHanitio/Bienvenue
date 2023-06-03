import React from 'react'

import {Typography, Box, Button, Card, CardMedia, CardContent} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2";
import RatingStars from '../../components/ratingstars/RatingStars';
import { Watch } from 'react-loader-spinner';

const MenuDesktop = (props) => {
  return (
    <Grid container sx={{width : {lg : "95%", xl : 1600}}}>
      <Grid container sx={{justifyContent : "center", alignItems : "center", width : "100%", height : 80}}>
        <Typography variant="h2" sx={{color : "white", textAlign : "center"}}>Menu Pack</Typography>
      </Grid>
      <Grid container sx={{height : 100, width : "100%", justifyContent : "space-around", mb : 2}}>
        {
          props.categories.map(category => (
            <Grid xxs={4} sm={2}>
              <Box sx={{width : "100%", height : "100%", display : "flex", alignItems : "center", justifyContent : "center"}}>
                <Button variant="contained" color={props.active===category ? "primary" : "secondary"} onClick={() => props.setActive(category)} sx={{width : "80%", height : "40%"}}>
                  <Typography variant="body2">{category}</Typography> 
                </Button>
              </Box>
            </Grid>
          ))
        }
      </Grid>
      <Grid container sx={{minHeight : "100%", width : "100%", justifyContent : "space-around", alignItems : "space-around"}}>
        {
          props.filteredData ? props.filteredData.map(data => (
            <Grid md={4} sx={{display : "flex", alignItems : "center", justifyContent : "center"}}>
              <Card raised sx={{margin : "20px 0", minHeight : 450, width : "70%"}}>
                <CardMedia
                  sx={{ height: 220 }}
                  image={data.img}
                />
                <CardContent sx={{textAlign: "center", display : "flex", flexDirection : "column", alignItems : "center", height : 230, justifyContent : "space-around"}}>
                  <Typography variant="h3" component="div" textAlign="center">
                    {data.name}
                  </Typography>
                  <Box sx={{display : "flex", justifyContent : "center"}}>
                    <RatingStars amount={data.rating} width={25} height={25}/>
                  </Box>
                  <Typography variant="body3" component="div" sx={{mb : 2}} textAlign="center">
                    {data.desc.length > 60 ? data.desc.slice(0, 60)+"..." : data.desc}
                  </Typography>
                  <Box component="div" sx={{display : "flex", justifyContent : "space-around", alignItems : "center", width : "100%"}}>
                    <Box component="div" sx={{mb : 1}}>
                      <Typography variant="body1">
                        IDR {data.price}k/gr
                      </Typography>
                    </Box>
                    <Button variant="contained" color="secondary" sx={{fontSize : 14}}>Add to Cart</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
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
    </Grid>
  )
}

export default MenuDesktop