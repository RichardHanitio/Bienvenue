import React, {useState} from "react";
import Container from "./AdminEditUserAccounts.styled";
import Button from "../../components/button/Button";

const AdminEditUserAccounts = () => {
  const [user, setUser] = useState(
    {
      "email" : "richardhan81@gmail.com",
      "username" : "Richard Ha",
      "phoneNum" : "081111111112",
      "password" : "richardpassword"
    }
  )
  
  return (
    <Container>
      <div className="new-menu-inner-container">
        <h1 className="new-menu-title">User Accounts</h1>
        <div className="new-menu-form-container">
          <form
            className="new-menu-form"
            method="post"
            encType="multipart/form-data"
          >
            <div className="new-menu-item">
              <label htmlFor="menu-name" className="new-menu-label">
                User ID
              </label>
              <input
                type="email"
                className="new-menu-input"
                name="menu-name"
                id="menu-name"
                disabled
              />
            </div>
            <div className="new-menu-item">
              <label htmlFor="menu-name" className="new-menu-label">
                Enter User Email
              </label>
              <input
                type="email"
                className="new-menu-input"
                name="menu-name"
                id="menu-name"
                defaultValue={user.email}
              />
            </div>
            <div className="new-menu-item">
              <label htmlFor="menu-price" className="new-menu-label">
                Enter User Username
              </label>
              <input
                type="text"
                className="new-menu-input"
                name="menu-price"
                id="menu-price"
                defaultValue={user.username}
              />
            </div>
            <div className="new-menu-item">
              <label htmlFor="menu-price" className="new-menu-label">
                Enter User Phone Number
              </label>
              <input
                type="tel"
                className="new-menu-input"
                name="menu-price"
                id="menu-price"
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
              <Button variant="primary" height="50px" type="submit" className="btn btn-go-back" style={
                {
                  backgroundColor : "#A0F8FE",
                }
              }>
                Go Back
              </Button>
              <Button variant="primary" height="50px" type="submit" className="btn btn-delete" style={
                {
                  backgroundColor : "#FF4848",
                }
              }>
                Delete
              </Button>
            </div>
            
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AdminEditUserAccounts;
