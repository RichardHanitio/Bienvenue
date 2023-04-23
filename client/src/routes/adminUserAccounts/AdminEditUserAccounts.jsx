import React, {useState, useEffect} from "react";
import Container from "./AdminEditUserAccounts.styled";
import Button from "../../components/button/Button";
import useFetch from "../../hooks/useFetch";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import Loader from "../../components/loader/Loader"
import { useSnackbar } from 'react-simple-snackbar';
import axios from "axios";

const AdminEditUserAccounts = () => {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const {loading, data, error} = useFetch(`/users/${id}`);
  const [user, setUser] = useState({
    email : undefined,
    username : undefined,
    phoneNum : undefined, 
  });

  useEffect(() => {
    const authenticated = jwt_decode(Cookies.get("access_token")).isAdmin;
    if(!authenticated) navigate("/");
    
    !loading && setUser(
      {
        email : data.data.email,
        username : data.data.username,
        phoneNum : data.data.phoneNum,
      }
    );

  }, [loading, data])

  const handleDetailsChange = (e) => {
    setUser({
      ...user,
      [e.target.id] : e.target.value,
    })
    console.log(user)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const username = formData.get("username");
    const phoneNum = formData.get("phoneNum");

    const body = {email, username, phoneNum};

    try {
      const res = await axios.patch(`/users/${id}/edit`, body);
      openSnackbar(res.data.msg);
      setUser({
        email : res.data.data.email,
        username : res.data.data.username,
        phoneNum : res.data.data.phoneNum,
      })

    } catch (e) {
      openSnackbar("Something went wrong, please try again")
    }
  }
  
  return (
    <Container>
      {
        (!loading && user) ? (
          <div className="new-menu-inner-container">
            <h1 className="new-menu-title">User Accounts</h1>
            <div className="new-menu-form-container">
              <form
                className="new-menu-form"
                method="post"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <div className="new-menu-item">
                  <label htmlFor="id" className="new-menu-label">
                    User ID
                  </label>
                  <input
                    type="text"
                    className="new-menu-input"
                    name="id"
                    id="id"
                    value={id}
                    disabled
                  />
                </div>
                <div className="new-menu-item">
                  <label htmlFor="email" className="new-menu-label">
                    Enter User Email
                  </label>
                  <input
                    type="email"
                    className="new-menu-input"
                    name="email"
                    id="email"
                    onChange={handleDetailsChange}
                    defaultValue={user.email}
                  />
                </div>
                <div className="new-menu-item">
                  <label htmlFor="username" className="new-menu-label">
                    Enter User Username
                  </label>
                  <input
                    type="text"
                    className="new-menu-input"
                    name="username"
                    id="username"
                    onChange={handleDetailsChange}
                    defaultValue={user.username}
                  />
                </div>
                <div className="new-menu-item">
                  <label htmlFor="phoneNum" className="new-menu-label">
                    Enter User Phone Number
                  </label>
                  <input
                    type="tel"
                    className="new-menu-input"
                    name="phoneNum"
                    id="phoneNum"
                    onChange={handleDetailsChange}
                    defaultValue={user.phoneNum}
                  />
                </div>
                <div className="new-menu-action-buttons">
                  <Button variant="primary" height="50px" type="submit" className="btn btn-update" style={
                    {
                      backgroundColor : "#FFC148",
                    }
                  }>
                    Update
                  </Button>
                  <Button variant="primary" height="50px" type="button" className="btn btn-go-back" style={
                    {
                      backgroundColor : "#A0F8FE",
                    }
                  } onClick={() => navigate(-1)}>
                    Go Back
                  </Button>
                  {/* <Button variant="primary" height="50px" type="button" className="btn btn-delete" style={
                    {
                      backgroundColor : "#FF4848",
                    }
                  }>
                    Delete
                  </Button> */}
                </div>
              </form>
            </div>
          </div>
        ) : <Loader />
      } 
    </Container>
  );
};

export default AdminEditUserAccounts;
