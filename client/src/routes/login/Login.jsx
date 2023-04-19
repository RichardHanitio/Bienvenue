import React from 'react'
import {AiFillLeftCircle} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

import Container from "./Login.styled"

const Login = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="login-left">
        <AiFillLeftCircle className="back-to-home" onClick={() => navigate("/")}/>
        <div className="login-left-container">
          <img src="/assets/logo-large.png" alt="logo" className="login-logo"/>
          <div className="login-quote">
            “Italian cuisine offers a wide canopy of incredibly diverse food dishes, and the best part of all these sumptuous dishes is that they are made from fresh and simple ingredients.”
            <br />
            <br />
            ~Chef Leonardo Bonucci
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <h1 className="login-title">Hey, Hello</h1>
          <h2 className="login-desc">Welcome Back! To keep connecting with us please login with your personal info</h2>
          <form className="login-form" method="post">
            <div className="login-item">
              <label htmlFor="username" className="login-label">Username</label>
              <input type="text" className="login-input" name="username" id="username"/>
            </div>
            <div className="login-item">
              <label htmlFor="password" className="login-label">Password</label>
              <input type="password" className="login-input" name="password" id="password"/>
            </div>
            <div className="show-pass">
              <input type="checkbox" className="show-pass-input" id="showpass"/>
              <label htmlFor="showpass" name="password" className="show-pass-label">Show Password</label>
            </div>
            <input type="submit" value="Login" className="login-submit" />
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Login