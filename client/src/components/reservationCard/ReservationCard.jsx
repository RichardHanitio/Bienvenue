import React, {useEffect, useState} from 'react'
import Button from '../button/Button'
import Container from './ReservationCard.styled'
import useFetch from '../../hooks/useFetch'

const ReservationCard = ({reservation, acceptReservation, declineReservation, accepted}) => {
  const {loading, data, error, reFetch} = useFetch(`/users/${reservation.userId}`);
  const [username, setUsername] = useState("");

  useEffect(() => {
    !loading && setUsername(data.data.username);
  }, [loading, data]);

  const getDate = () => {
    const date = new Date(reservation.date);
    const refactoredDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    return refactoredDate;
  }

  const getTime = () => {
    const time = new Date(reservation.time);
    const refactoredTime = `${time.getHours()}:${time.getMinutes()<10 ? "0"+time.getMinutes() : time.getMinutes()}`;
    return refactoredTime;
  }

  return (
    <Container>
      <div className="reservation-card-inner">
        <div>User ID : {reservation.userId}</div>
        <div>Username : {username}</div>
        <div>Order date : {getDate()}</div>
        <div>Order time : {getTime()}</div>
        <div>Total guests : {reservation.totalGuest} guests</div>
        <div>Payment method : {reservation.method}</div>
        <div>Ordered Items :</div>
        <div>
          {
            reservation.items.map((item) => (
              <div key={item.itemId} style={{fontWeight: "600"}}>
                <span>{item.amount}x </span>
                <span>{item.itemId}</span>
              </div>
            ))
          }
        </div>
        <div>Total Price : Rp. {reservation.totalPrice}k</div>
        {
          accepted ?
            <div className="pending-card-buttons">
              <Button width="150px" className="btn" style={{
                backgroundColor : "#FF4848",
              }} onClick={declineReservation}>Decline</Button>
              <Button width="150px" className="btn" style={{
                backgroundColor : "#A3FF48",
              }} onClick={acceptReservation}>Accept</Button>
            </div>
          : (
            <div><span style={{color : "#A3FF48"}}>Reservation code</span> : {reservation._id}</div>
          )
        }
      </div>
    </Container>
  )
}

export default ReservationCard