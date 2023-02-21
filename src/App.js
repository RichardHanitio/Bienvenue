import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Menu from './routes/menu/Menu'
import Home from './routes/home/Home';
import Register from './routes/register/Register'
import Login from './routes/login/Login';

const router = createBrowserRouter([
  { path : "/", element: <Home />},
  { path : "/register", element: <Register />},
  { path : "/menu", element: <Menu />},
  { path : "/login", element: <Login />}
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App