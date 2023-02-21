import React from 'react'
import Container from "./Item.styled"

const Item = ({data}) => {
  const {name, desc, rating, price, img} = data;

  const RatingStars = (amount) => {
    const stars = [];

    for(let i=0; i<amount; i++) {
      stars.push(
        <svg width="25" height="25" fill="#f1b33c" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" key={i} className="item-rating">
          <path d="M18.469 22.5a.75.75 0 0 1-.44-.14L12 17.99l-6.029 4.37a.75.75 0 0 1-1.15-.847l2.35-6.965-6.093-4.178A.75.75 0 0 1 1.5 9h7.518l2.268-6.981a.75.75 0 0 1 1.427 0l2.27 6.984H22.5a.75.75 0 0 1 .424 1.369l-6.096 4.176 2.35 6.963a.75.75 0 0 1-.71.99Z"></path>
        </svg>
      )
    }

    return stars;
  }
 
  return (
    <Container>
      <div className="item-inner-container">
        <div className="item-img">
          <img src={img} alt={name} />
        </div>
        <div className="item-name-rating-desc">
          <h3 className="item-name">{name}</h3>
          <div className="item-rating">
            {
              RatingStars(rating)
            }
          </div>
          <div className="item-desc">{desc}</div>
        </div>
        <div className="item-price-buy">
          <div className="item-price">
            IDR ${price}/gr
          </div>
          <button type="button" className="item-buy">Add to Cart</button>
        </div>
      </div>
    </Container>
  )
}

export default Item