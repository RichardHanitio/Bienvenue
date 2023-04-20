import React, {useContext, useState} from 'react'
import {AiFillLeftCircle} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import Container from "./Login.styled"
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const {user, loading, error, dispatch} = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username : undefined,
    password : undefined,
  });
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleCredentialChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id] : e.target.value,
    })
  }

  const handleSubmitCredentials = async(e) => {
    e.preventDefault();
    try {
      dispatch({type : "LOGIN_START"})
      const res = await axios.post("/auth/login", credentials)
      dispatch({type : "LOGIN_SUCCESS", payload : res.data})
      navigate("/");
    } catch(e) {
      setLoginError(e.response.data.msg);
    }
  }

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
          {
            loginError && <div className="login-error">{loginError}</div>
          }
          <form className="login-form" method="post">
            <div className="login-item">
              <label htmlFor="username" className="login-label">Username</label>
              <input type="text" className="login-input" name="username" id="username" onChange={handleCredentialChange}/>
            </div>
            <div className="login-item">
              <label htmlFor="password" className="login-label">Password</label>
              <input type={showPass ? "text":"password"} className="login-input" name="password" id="password" onChange={handleCredentialChange}/>
            </div>
            <div className="show-pass">
              <input type="checkbox" className="show-pass-input" id="showpass" onClick={(e) => setShowPass(e.target.checked)}/>
              <label htmlFor="showpass" name="password" className="show-pass-label" onChange={handleCredentialChange}>Show Password</label>
            </div>
            <input type="submit" value="Login" className="login-submit" onClick={handleSubmitCredentials}/>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Login