import React from 'react'

import {Typography, Box, Button} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2";
import Item from '../../components/item/Item';
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
            <Item data={data} key={data._id}/>
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