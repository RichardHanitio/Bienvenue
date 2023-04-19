import React, {useState, useEffect} from 'react'
import Container from './AdminReservationPlaced.styled';
import ReservationCard from '../../components/reservationCard/ReservationCard';

const AdminReservationPlaced = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // fetch all reservations
    setReservations([
      {
        "userId" : "6432bcef57ac838d75ea64b2",
        "items" : [
          {
            "itemId" : "6432c2682e82e8d45b57b010",
            "amount" : 5
          },
          {
            "itemId" : "6432c2682e82e8d45b57b010",
            "amount" : 3
          },
          {
            "itemId" : "6432c2682e82e8d45b57b010",
            "amount" : 1
          },
        ],
        "date" : "2023-04-20",
        "time" : "1681098716312",
        "totalGuest" : 5,
        "totalPrice" : 1000,
        "method" : "ovo",
        "status" : "pending"
      },
      {
        "userId" : "6432bcef57ac838d75ea64b2",
        "items" : [
          {
            "itemId" : "6432c2682e82e8d45b57b010",
            "amount" : 5
          }
        ],
        "date" : "2023-04-20",
        "time" : "1681098716312",
        "totalGuest" : 5,
        "totalPrice" : 1000,
        "method" : "ovo",
        "status" : "pending"
      },
      {
        "userId" : "6432bcef57ac838d75ea64b2",
        "items" : [
          {
            "itemId" : "6432c2682e82e8d45b57b010",
            "amount" : 5
          }
        ],
        "date" : "2023-04-20",
        "time" : "1681098716312",
        "totalGuest" : 5,
        "totalPrice" : 1000,
        "method" : "ovo",
        "status" : "pending"
      },
      {
        "userId" : "6432bcef57ac838d75ea64b2",
        "items" : [
          {
            "itemId" : "6432c2682e82e8d45b57b010",
            "amount" : 5
          }
        ],
        "date" : "2023-04-20",
        "time" : "1681098716312",
        "totalGuest" : 5,
        "totalPrice" : 1000,
        "method" : "ovo",
        "status" : "pending"
      },
      {
        "userId" : "6432bcef57ac838d75ea64b2",
        "items" : [
          {
            "itemId" : "6432c2682e82e8d45b57b010",
            "amount" : 5
          }
        ],
        "date" : "2023-04-20",
        "time" : "1681098716312",
        "totalGuest" : 5,
        "totalPrice" : 1000,
        "method" : "ovo",
        "status" : "pending"
      },
      {
        "userId" : "6432bcef57ac838d75ea64b2",
        "items" : [
          {
            "itemId" : "6432c2682e82e8d45b57b010",
            "amount" : 5
          }
        ],
        "date" : "2023-04-20",
        "time" : "1681098716312",
        "totalGuest" : 5,
        "totalPrice" : 1000,
        "method" : "ovo",
        "status" : "pending"
      },
    ])
  }, [])

  return (
    <Container>
      <div className="pending-inner-container">
        <h1 className="pending-title">Reservations Placed</h1>
        <div className="pending-cards">
          {
            reservations.map(reservation => (
              <ReservationCard reservation={reservation}/>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default AdminReservationPlaced;