import {useReducer, useEffect, createContext} from "react";

const INITIAL_STATE = {
  user : JSON.parse(localStorage.getItem("user")) || null,
  loading : false,
  error : null,
}

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch(action.type) {
    case "LOGIN_START" :
      
  }
}