import React, { useContext, useEffect, useState } from "react";
import Container from "./Item.styled";
import RatingStars from "../ratingstars/RatingStars";
import Button from "../button/Button";
import { ReserveContext } from "../../context/ReserveContext";
import { AuthContext } from "../../context/AuthContext";
import { useSnackbar } from "react-simple-snackbar";

const Item = ({ data }) => {
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

  return (
    <Container>
      <div className="item-inner-container">
        <div className="item-img">
          <img src={img} alt={name} />
        </div>
        <div className="item-name-rating-desc">
          <h3 className="item-name">{name}</h3>
          <div className="item-rating">
            <RatingStars amount={rating} />
          </div>
          <div className="item-desc">{desc}</div>
        </div>
        <div className="item-price-buy">
          <div className="item-price">IDR ${price}k/gr</div>
          {!addedItem ? (
            <Button
              type="button"
              className="item-buy"
              onClick={handleButtonOnClick}
              disabled={user===null}
            >
              Add to Cart
            </Button>
          ) : (
            <Button
              type="button"
              variant="danger"
              className="item-buy"
              onClick={handleButtonOnClick}
            >
              Remove from Cart
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Item;
