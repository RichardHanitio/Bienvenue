import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Container from './AdminPendingReservation.styled'
import ReservationCard from '../../components/reservationCard/ReservationCard';
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import useFetch from "../../hooks/useFetch";
import { useSnackbar } from 'react-simple-snackbar'
import axios from 'axios';

const AdminPendingReservation = () => {
  const [pendingReservations, setPendingReservations] = useState([]);
  const {loading, data, error} = useFetch("/reservations");
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = jwt_decode(Cookies.get("access_token")).isAdmin;
    if(!authenticated) navigate("/")

    !loading && setPendingReservations(
      data.data.filter((d) => d.status==="pending")
    )

  }, [data, loading])

  const acceptReservation = async(reservationId) => {
    const attr = {
      status : "accepted",
    }
    try {
      const res = await axios.patch(`/reservations/${reservationId}/edit`, attr);
      window.location.reload();
      openSnackbar(res.data.msg);
      
    } catch(err) {
      openSnackbar("Something went wrong, please try again");
    }
  }

  const declineReservation = async(reservationId) => {
    const attr = {
      status : "declined",
    }
    try {
      const res = await axios.patch(`/reservations/${reservationId}/edit`, attr);
      window.location.reload();
      openSnackbar(res.data.msg);
      
    } catch(err) {
      openSnackbar("Something went wrong, please try again");
    }
  }

  return (
    <Container>
      <div className="pending-inner-container">
        <h1 className="pending-title">Pending Reservation</h1>
        <div className="pending-cards">
          {
            pendingReservations.map(reservation => (
              <ReservationCard key={reservation._id} reservation={reservation} acceptReservation={() => acceptReservation(reservation._id)}
              declineReservation={() => declineReservation(reservation._id)}/>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default AdminPendingReservation