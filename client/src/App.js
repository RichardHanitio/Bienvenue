import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Loader from './components/loader/Loader';
import Menu from './routes/menu/Menu'
import Home from './routes/home/Home';
import Register from './routes/register/Register'
import Login from './routes/login/Login';
import Reservation from './routes/reservation/Reservation';
import History from "./routes/history/History";
import AdminDashboard from './routes/adminDashboard/AdminDashboard';
import AdminPendingReservation from './routes/adminPendingReservation/AdminPendingReservation';
import AdminReservationPlaced from './routes/adminReservationPlaced/AdminReservationPlaced';
import AdminAddNewMenus from './routes/adminAddNewMenus/AdminAddNewMenus';
import AdminUpdateMenu from './routes/adminUpdateMenu/AdminUpdateMenu';
import AdminUpdateEditMenu from "./routes/adminUpdateMenu/AdminUpdateEditMenu";
import AdminUserAccounts from './routes/adminUserAccounts/AdminUserAccounts';
import AdminEditUserAccounts from './routes/adminUserAccounts/AdminEditUserAccounts';

const router = createBrowserRouter([
  { path : "/", element: <Home />},
  { path : "/loader", element: <Loader />},
  { path : "/register", element: <Register />},
  { path : "/menu", element: <Menu />},
  { path : "/history", element: <History />},
  { path : "/login", element: <Login />},
  { path : "/reservation", element: <Reservation />},
  { path : "/admin/dashboard", element: <AdminDashboard />},
  { path : "/admin/pending-reservations", element: <AdminPendingReservation />},
  { path : "/admin/reservations-placed", element: <AdminReservationPlaced />},
  { path : "/admin/add-new-menus", element: <AdminAddNewMenus />},
  { path : "/admin/update-menu", element: <AdminUpdateMenu />},
  { path : "/admin/update-menu/edit", element: <AdminUpdateEditMenu />},
  { path : "/admin/user-accounts", element: <AdminUserAccounts />},
  { path : "/admin/user-accounts/edit", element: <AdminEditUserAccounts />},
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App