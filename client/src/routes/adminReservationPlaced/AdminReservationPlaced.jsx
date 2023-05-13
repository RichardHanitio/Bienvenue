import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Container from './AdminReservationPlaced.styled';
import ReservationCard from '../../components/reservationCard/ReservationCard';
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import useFetch from "../../hooks/useFetch";
import axios from 'axios';

const AdminReservationPlaced = () => {
  const [reservations, setReservations] = useState([]);
  const {loading, data, error} = useFetch("/reservations");

  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = jwt_decode(Cookies.get("access_token")).isAdmin;
    if(!authenticated) navigate("/")

    !loading && setReservations(
      data.data.filter((d) => d.status==="accepted")
    )

  }, [data, loading])


  return (
    <Container>
      <div className="pending-inner-container">
        <h1 className="pending-title">Reservations Placed</h1>
        <div className="pending-cards">
          {
            reservations.map(reservation => (
              <ReservationCard reservation={reservation} accepted={true}/>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default AdminReservationPlaced;