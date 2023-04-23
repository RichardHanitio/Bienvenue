import React, {useState, useEffect} from 'react'
import Container from './AdminUserAccounts.styled';
import Table from '../../components/table/Table';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import useFetch from "../../hooks/useFetch";

const AdminUserAccounts = () => {
  const {loading, data, error} = useFetch("/users");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = jwt_decode(Cookies.get("access_token")).isAdmin;
    if(!authenticated) navigate("/");

    !loading && setUser(data.data);
  }, [loading, data])

  const handleEdit = () => {
    navigate("/admin/user-accounts/edit");
  }

  return (
    <Container>
      <div className="user-accounts-inner-container">
        <h1 className="user-accounts-title">User Accounts</h1>
          <Table data={user} handleEdit={handleEdit}/>
      </div>
    </Container>
  )
}

export default AdminUserAccounts;