import React, { useContext, useEffect, useState } from "react";
import Container from "./Item.styled";
import RatingStars from "../ratingstars/RatingStars";
import Button from "../button/Button";
import { ReserveContext } from "../../context/ReserveContext";
import { AuthContext } from "../../context/AuthContext";
import { useSnackbar } from "react-simple-snackbar";


import {Box, Card, CardMedia, CardContent, Typography} from "@mui/material"

const Item = (theme, data) => {
  const { _id, name, desc, rating, price, img } = data;
  const {user} = useContext(AuthContext);
  const { items, dispatch } = useContext(ReserveContext);
  const [addedItem, setAddedItem] = useState(false);
  const [openSnackbar, closeSnackbar] = useSnackbar();

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

  console.log(data)

  return (
    <Box component="div" key={data.name}>
      <Card raised sx={{position : "relative", left : 15, width : {xxs : "100%", sm : "90%"}, height : 550}}>
        <CardMedia
          sx={{ height: 250 }}
          image={data.img}
        />
        <CardContent sx={{display : "flex", height : 300, flexDirection : "column", justifyContent : "space-between"}}>
          <Typography variant="h3" component="div" textAlign="center">
            {data.name}
          </Typography>
          <Box sx={{display : "flex", justifyContent : "center"}}>
            <RatingStars amount={data.rating} />
          </Box>
          <Typography variant="body2" component="div" sx={{mb : 3}} textAlign="center">
            {/* {data.desc.length > 60 ? data.desc.slice(0, 60)+"..." : data.desc} */}
            {data.desc}
          </Typography>
          <Box component="div" sx={{display : "flex", justifyContent : "space-between"}}>
            <Box component="div">
              <Typography variant="body1" sx={{color : theme.palette.error.light, fontWeight: 600}}>
                IDR {data.price}k/gr
              </Typography>
              <Typography variant="body2" sx={{textDecoration: "line-through"}}>
                IDR {data.price}k/gr
              </Typography>
            </Box>
            <Button variant="contained" color="secondary" sx={{fontSize : 14, margin : "10px"}}>Add to Cart</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Item;
