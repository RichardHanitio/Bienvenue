import React from 'react'
import {AiFillLeftCircle} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

import Container from "./Register.styled";

const Register = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="register-left">
        <AiFillLeftCircle className="back-to-home" onClick={() => navigate("/")}/>
        <div className="register-left-container">
          <img src="/assets/logo-large.png" alt="logo" className="register-logo"/>
          <div className="register-quote">
            “Italian cuisine offers a wide canopy of incredibly diverse food dishes, and the best part of all these sumptuous dishes is that they are made from fresh and simple ingredients.”
            <br />
            <br />
            ~Chef Leonardo Bonucci
          </div>
        </div>
      </div>
      <div className="register-right">
        <div className="register-right-container">
          <h1 className="register-title">Create Account</h1>
          <h2 className="register-desc">Enter your personal details to get reservation access and weekly discounts!</h2>
          <form className="register-form" method="post">
            <div className="register-item">
              <label htmlFor="email" className="register-label">Email</label>
              <input type="email" className="register-input" name="email" id="email"/>
            </div>
            <div className="register-item">
              <label htmlFor="username" className="register-label">Username</label>
              <input type="text" className="register-input" name="username" id="username"/>
            </div>
            <div className="register-item">
              <label htmlFor="phonenum" className="register-label">Phone Number</label>
              <input type="tel" className="register-input" name="phonenum" id="phonenum"/>
            </div>
            <div className="register-item">
              <label htmlFor="password" className="register-label">Password</label>
              <input type="password" className="register-input" name="password" id="password"/>
            </div>
            <div className="show-pass">
              <input type="checkbox" className="show-pass-input" id="showpass"/>
              <label htmlFor="showpass" name="password" className="show-pass-label">Show Password</label>
            </div>
            <input type="submit" value="Register" className="register-submit" />
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Register