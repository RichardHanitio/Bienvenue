import React, {useState, useEffect} from 'react'
import Container from './AdminUserAccounts.styled';
import Table from '../../components/table/Table';
import { useNavigate } from 'react-router-dom';

const AdminUserAccounts = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch all reservations
    setUser([
      {
        "email" : "richardhan81@gmail.com",
        "username" : "Richard Ha",
        "phoneNum" : "081111111112",
        "password" : "richardpassword"
      },
      {
        "email" : "richardhan81@gmail.com",
        "username" : "Richard Ha",
        "phoneNum" : "081111111112",
        "password" : "richardpassword"
      },
      {
        "email" : "richardhan81@gmail.com",
        "username" : "Richard Ha",
        "phoneNum" : "081111111112",
        "password" : "richardpassword"
      },
    ])
  }, [])

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