import React, { useContext, useEffect, useState } from "react";
import RatingStars from "../ratingstars/RatingStars";
import { ReserveContext } from "../../context/ReserveContext";
import { useSnackbar } from "react-simple-snackbar";

import {Box, Card, CardMedia, CardContent, Typography, Button} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";

const Item = ({data, isLoggedIn}) => {
  const { _id, name, desc, rating, price, discount, img } = data;
  const { items, dispatch } = useContext(ReserveContext);
  const [addedItem, setAddedItem] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const theme = useTheme();

  useEffect(() => {
    // check if the item is already in the cart
    items.find((item) => item._id === _id) && setAddedItem(true);
  }, [_id, items]);


  const handleButtonOnClick = (e) => {
    // if it's not in cart, then add the item
    if (!addedItem) {
      dispatch({ type: "ADD_ITEM", payload: data });
      openSnackbar("Item added successfully");
    } else {
      dispatch({ type: "REMOVE_ITEM", payload: data });
      openSnackbar("Item removed successfully");
    }
    setAddedItem((addedItem) => !addedItem);
  };

  return (
    <Grid md={12} sx={{display : "flex", alignItems : "center", justifyContent : "center"}}>
      <Card raised sx={{margin : "20px 0", minHeight : 450, width : "85%"}}>
        <CardMedia
          sx={{ height: 220 }}
          image={img}
        />
        <CardContent sx={{textAlign: "center", display : "flex", flexDirection : "column", alignItems : "center", height : 230, justifyContent : "space-around"}}>
          <Typography variant="h4" component="div" textAlign="center">
            {name}
          </Typography>
          <Box sx={{display : "flex", justifyContent : "center"}}>
            <RatingStars amount={rating} width={25} height={25}/>
          </Box>
          <Typography variant="body3" component="div" sx={{mb : 2}} textAlign="center">
            {desc.length > 60 ? desc.slice(0, 60)+"..." : desc}
          </Typography>
          <Box component="div" sx={{display : "flex", justifyContent : "space-around", alignItems : "center", width : "100%"}}>
            <Box component="div" sx={{mb : 1}}>
              {
                discount>0 ? (
                  <>
                    <Typography variant="body2" sx={{color : theme.palette.error.light, fontWeight: 600}}>
                      IDR {price - (price) * (discount/100)}k/gr
                    </Typography>
                    <Typography variant="body3" sx={{textDecoration: "line-through"}}>
                      IDR {price}k/gr
                    </Typography>
                  </>
                ) : (
                  <Typography variant="body2">
                    IDR {price}k/gr
                  </Typography>
                )
              }
              
            </Box>
            <Box>
              <Button variant="contained" color="secondary" disabled={!isLoggedIn} sx={{fontSize : 14, display : addedItem ? "none" : "flex"}} onClick={handleButtonOnClick}>Add to Cart</Button>
              <Button variant="contained" color="warning" sx={{fontSize : 14, display : addedItem ? "flex" : "none"}} onClick={handleButtonOnClick}>Remove from Cart</Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
};

export default Item;
