import React, {useState, useContext} from 'react'
import {AiFillLeftCircle} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import Container from "./Register.styled";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const {user, loading, error, dispatch} = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email : undefined,
    username : undefined,
    phoneNum : undefined,
    password : undefined,
  })
  const [showPass, setShowPass] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const handleCredentialChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id] : e.target.value,
    })
  }

  const handleSubmitCredentials = async(e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", credentials)
      // auto login after registration
      dispatch({type : "LOGIN_START"})
      const res = await axios.post("/auth/login", {
        username : credentials.username,
        password : credentials.password,
      })
      dispatch({type : "LOGIN_SUCCESS", payload : res.data})
      console.log(user);
      navigate("/");
    } catch(e) {
      setRegisterError(e.response.data.msg);
    }
  }

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
          {
            registerError && <div className="register-error">{registerError}</div> 
          }
          <form className="register-form" method="post">
            <div className="register-item">
              <label htmlFor="email" className="register-label">Email</label>
              <input type="email" className="register-input" name="email" id="email" onChange={handleCredentialChange}/>
            </div>
            <div className="register-item">
              <label htmlFor="username" className="register-label">Username</label>
              <input type="text" className="register-input" name="username" id="username" onChange={handleCredentialChange}/>
            </div>
            <div className="register-item">
              <label htmlFor="phoneNum" className="register-label">Phone Number</label>
              <input type="tel" className="register-input" name="phonenum" id="phoneNum" onChange={handleCredentialChange}/>
            </div>
            <div className="register-item">
              <label htmlFor="password" className="register-label">Password</label>
              <input type={showPass ? "text":"password"} className="register-input" name="password" id="password" onChange={handleCredentialChange}/>
            </div>
            <div className="show-pass">
              <input type="checkbox" className="show-pass-input" id="showpass" onClick={(e) => setShowPass(e.target.checked)}/>
              <label htmlFor="showpass" name="password" className="show-pass-label">Show Password</label>
            </div>
            <input type="submit" onClick={handleSubmitCredentials} value="Register" className="register-submit" />
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Register