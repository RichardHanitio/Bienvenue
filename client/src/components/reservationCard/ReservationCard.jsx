import React from 'react'
import Button from '../button/Button'
import Container from './ReservationCard.styled'

const ReservationCard = ({reservation}) => {
  return (
    <Container>
      <div className="reservation-card-inner">
        <div>User ID : {reservation.userId}</div>
        <div>Username : Username</div>
        <div>Order date : {reservation.date}</div>
        <div>Order time : {reservation.time}</div>
        <div>Total guests : {reservation.totalGuest} guests</div>
        <div>Payment method : {reservation.method}</div>
        <div>Ordered Items :</div>
        <div>
          {
            reservation.items.map((item) => (
              <div>
                <span>{item.amount}x </span>
                <span>{item.itemId}</span>
              </div>
            ))
          }
        </div>
        <div>Total Price : Rp. {reservation.totalPrice}</div>
        <div className="pending-card-buttons">
          <Button width="150px" className="btn" style={{
            backgroundColor : "#FF4848",
          }}>Decline</Button>
          <Button width="150px" className="btn" style={{
            backgroundColor : "#A3FF48",
          }}>Accept</Button>
        </div>
      </div>
    </Container>
  )
}

export default ReservationCard