import React, {useState, useEffect} from 'react'
import Container from './AdminUserAccounts.styled';
import Table from '../../components/table/Table';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import useFetch from "../../hooks/useFetch";
import axios from 'axios';
import { useSnackbar } from 'react-simple-snackbar';

const AdminUserAccounts = () => {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const {loading, data, error} = useFetch("/users");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = jwt_decode(Cookies.get("access_token")).isAdmin;
    if(!authenticated) navigate("/");

    !loading && setUser(data.data);
  }, [loading, data])

  const handleEdit = (id) => {
    navigate(`/admin/user-accounts/edit?id=${id}`);
  }

  const handleDelete = async(id) => {
    try {
      const res = await axios.get(`/users/${id}/delete`);
      openSnackbar(res.data.msg);
      window.location.reload();
    } catch(err) {
      openSnackbar("Something went wrong, please try again");
      console.log(err)
    }
  }

  return (
    <Container>
      <div className="user-accounts-inner-container">
        <h1 className="user-accounts-title">User Accounts</h1>
          <Table data={user} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </div>
    </Container>
  )
}

export default AdminUserAccounts;