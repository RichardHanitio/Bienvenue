import React, {useState, useEffect} from 'react'
import Container from './AdminPendingReservation.styled'
import ReservationCard from '../../components/reservationCard/ReservationCard';
import axios from 'axios';
import useFetch from "../../hooks/useFetch";

const AdminPendingReservation = () => {
  const [pendingReservations, setPendingReservations] = useState([]);
  const {loading, data, error} = useFetch("/reservations");

  useEffect(() => {
    // !loading && setPendingReservations(
    //   data.filter((d) => d.status==="pending")
    // )

    !loading && console.log(data);

      // {
      //   "userId" : "6432bcef57ac838d75ea64b2",
      //   "items" : [
      //     {
      //       "itemId" : "6432c2682e82e8d45b57b010",
      //       "amount" : 5
      //     },
      //     {
      //       "itemId" : "6432c2682e82e8d45b57b010",
      //       "amount" : 3
      //     },
      //     {
      //       "itemId" : "6432c2682e82e8d45b57b010",
      //       "amount" : 1
      //     },
      //   ],
      //   "date" : "2023-04-20",
      //   "time" : "1681098716312",
      //   "totalGuest" : 5,
      //   "totalPrice" : 1000,
      //   "method" : "ovo",
      //   "status" : "pending"
      // },
  }, [loading, data]);

  return (
    <Container>
      {!loading && console.log(pendingReservations)}
      <div className="pending-inner-container">
        <h1 className="pending-title">Pending Reservation</h1>
        <div className="pending-cards">
          {
            pendingReservations.map(reservation => (
              <ReservationCard reservation={reservation}/>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default AdminPendingReservation