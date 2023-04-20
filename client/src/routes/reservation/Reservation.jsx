import React, {useContext, useEffect} from 'react'
import DatePicker from "react-datepicker"
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Container from "./Reservation.styled"
import Header from '../../components/header/Header'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer';
import { ReserveContext } from '../../context/ReserveContext';

const Reservation = () => {
  const {items, date, time, totalGuest, totalPrice, dispatch} = useContext(ReserveContext);

  // send this to backend
  const handleSubmit = () => {
    const payload = {
      userId : "",
      items : items,
      date : date,
      time : time,
      totalGuest : totalGuest,
      method : "OVO",
      status : "pending",
    }
    console.log(payload)
    return payload;
  }

  // will be fetched from api
  // const cartItems = allMenus.slice(0,3)

  const handleIncreaseAmount = (e) => {
    dispatch({type: "INCREASE_ITEM_AMOUNT", payload : e.target.id})
  }

  const handleDecreaseAmount = (e) => {
    dispatch({type: "DECREASE_ITEM_AMOUNT", payload : e.target.id})
  }

  return (
    <>
      <Header />
      <Container>
        <div className="reservation-inner-container">
          <div className="order-summary">
            <h1 className="order-summary-title">Order Summary</h1>
            {
              (items.length > 0 && totalPrice > 0) ? (
                <>
                  <div className="orders-container">
                    {
                      items.map((item, index) => (
                        <div className="orders-item" key={item._id}>
                          <div className="orders-item-image">
                            <img src={item.img} alt={item.name} />
                          </div>
                          <div className="orders-item-details">
                            <div className="orders-item-name">{item.name}</div>
                            <div className="orders-item-price">IDR {item.price*item.amount}k</div>
                          </div>
                          <div className="orders-item-amount">
                            <div className="orders-item-amount-button orders-item-amount-minus" id={item._id} onClick={handleDecreaseAmount}>
                              -
                            </div>
                            <span>
                              {item.amount}
                            </span>
                            <div className="orders-item-amount-button orders-item-amount-plus" id={item._id} onClick={handleIncreaseAmount}>
                              +
                            </div>
                          </div>
                        </div>  
                      ))
                    }
                    <div className="horizontal-line" />
                    <div className="total">
                      <div>Total : </div>
                      <div>IDR {totalPrice}k</div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="no-item">No items in cart</div>
              )
            }
          </div>
          <div className="reservation-details">
            <h1 className="reservation-details-title">Reservation</h1>
            <div className="details">
              <div className="detail detail-date">
                <div className="detail-label">Choose reservation date :</div>
                <DatePicker
                  selected={date}
                  className="detail-input"
                  onSelect={(date) =>
                    dispatch({type : "CHANGE_DATE", payload : date})
                  }
                />
              </div>
              <div className="detail detail-guest">
                <div className="detail-label">Total guests :</div>
                <input
                  type="number"
                  className="detail-input"
                  defaultValue="1"
                  onChange={(e) =>
                    dispatch({type : "CHANGE_TOTAL_GUEST", payload : e.target.value})
                  }
                />
              </div>
              <div className="detail detail-time">
                <div className="detail-label">Reservation time :</div>
                <TimePicker
                  onChange={(time) =>{
                    dispatch({type : "CHANGE_TIME", payload : time})
                  }}
                  className="detail-input"
                  value={time}
                />
              </div>
            </div>
            <Button className="reserve-button" variant="primary" width="90%" onClick={handleSubmit} disabled={totalPrice === 0}>
              Reserve
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Reservation