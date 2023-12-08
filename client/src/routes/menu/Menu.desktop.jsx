import React from 'react'

import {Typography, Box, Button} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2";
import Item from '../../components/item/Item';
import { Watch } from 'react-loader-spinner';

const MenuDesktop = (props) => {
  return (
    <Grid container sx={{width : {lg : "95%", xl : 1600}, justifyContent : "center"}}>
      <Grid container sx={{justifyContent : "center", alignItems : "center", width : "100%", height : 80}}>
        <Typography variant="h2" sx={{color : "white", textAlign : "center"}}>Menu Pack</Typography>
      </Grid>
      <Grid container sx={{height : 100, width : "90%", justifyContent : "space-around", mb : 2}}>
        {
          props.categories.map(category => (
            <Grid xxs={4} sm={2} key={category}>
              <Box sx={{width : "100%", height : "100%", display : "flex", alignItems : "center", justifyContent : "center"}}>
                <Button variant="contained" color={props.active===category ? "primary" : "secondary"} onClick={() => props.setActive(category)} sx={{width : "80%", height : "40%"}}>
                  <Typography variant="body2">{category}</Typography> 
                </Button>
              </Box>
            </Grid>
          ))
        }
      </Grid>
      <Grid container sx={{minHeight : "100%", width : "80%", justifyContent : "space-around", alignItems : "space-around", display : "flex", mb : 10}}>
        {
          (props.loading && !props.menuLoadingError) && (
            <Box sx={{display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center"}}>
              <Watch
                height="50"
                width="50"
                radius="48"
                color="white"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
              <Typography variant="body2" color="white" sx={{mt : 3}}>Loading all menus, please wait</Typography>
            </Box>
          )
        }
        {
          (!props.loading && props.menuLoadingError) && (
            <Typography variant="body2" color="white" sx={{mt : 3}}>Something went wrong, please reload the page</Typography>
          )
        }
        {
          (!props.loading && props.filteredData) && (
            props.filteredData.map(data => (
              <Grid md={4} sx={{display : "flex", alignItems : "center", justifyContent : "center"}} key={data._id}>
                <Item data={data} isLoggedIn={props.isLoggedIn} key={data._id}/>
              </Grid>
           ))
          )
        }
      </Grid>
    </Grid>
  )
}

export default MenuDesktop