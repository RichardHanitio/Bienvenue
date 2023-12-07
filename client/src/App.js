import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Menu from './routes/menu/Menu'
import Home from './routes/home/Home';
import Register from './routes/register/Register'
import Login from './routes/login/Login';
import Reservation from './routes/reservation/Reservation';
import History from "./routes/history/History";
import NewPassword from "./routes/newPassword/NewPassword";
import Payment from "./routes/payment/Payment";
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import AdminDashboard from './routes/adminDashboard/AdminDashboard';
import AdminPendingReservation from './routes/adminPendingReservation/AdminPendingReservation';
import AdminReservationPlaced from './routes/adminReservationPlaced/AdminReservationPlaced';
import AdminAddNewMenus from './routes/adminAddNewMenus/AdminAddNewMenus';
import AdminUpdateMenu from './routes/adminUpdateMenu/AdminUpdateMenu';
import AdminUpdateEditMenu from "./routes/adminUpdateMenu/AdminUpdateEditMenu";
import AdminUserAccounts from './routes/adminUserAccounts/AdminUserAccounts';
import AdminEditUserAccounts from './routes/adminUserAccounts/AdminEditUserAccounts';

import {ThemeProvider, createTheme} from "@mui/material/styles"

const theme = createTheme({
  breakpoints : {
    values : {
      xxs: 0,
      xs : 375,
      sm: 600,
      md: 1025,
      lg: 1200,
      xl: 1536,
      xxl : 1920
    },
  },
  palette : {
    primary : {
      main : "#324B4B",
      light : "#265A5B",
      dark : "#223434"
    },
  },
  typography : {
    fontFamily : ["Lexend", "sans-serif"].join(","),
    h1 : {
      fontSize : 50,
      fontWeight : 700
    },
    h2 : {
      fontSize : 36,
      fontWeight : 700
    },
    h3 : {
      fontSize : 28,
      fontWeight : 700
    },
    h4 : {
      fontSize : 20,
      fontWeight : 600
    },
    h5 : {
      fontSize : 16,
      fontWeight : 600
    },
    body1 : {
      fontSize : 20,
      fontWeight : 400
    },
    body2 : {
      fontSize : 16,
      fontWeight : 500
    },
    body3 : {
      fontSize : 14,
      fontWeight : 500
    },
    body4 : {
      fontSize : 12,
      fontWeight : 500
    },
  },
  components : {
    MuiAppBar : {
      styleOverrides : {
        root : {
          backgroundColor : "#265A5B"
        }
      }
    },
    MuiButton : {
      variants : [
        {
          props : { variant: "contained", color : "primary"},
          style : {
            backgroundColor : "#FF8748",
            color : "white",
            "&:hover" : {
              backgroundColor : "#B74424",
            }
          }
        },
        {
          props : { variant: "contained", color : "secondary"},
          style : {
            backgroundColor : "#FFE1D1",
            color : "black",
            "&:hover" : {
              backgroundColor : "#FF8748",
              color : "white"
            }
          }
        },
        {
          props : { variant: "contained", color : "warning"},
          style : {
            backgroundColor : "#B73A7E",
            color : "white",
            "&:hover" : {
              backgroundColor : "#7A1660",
              color : "white"
            }
          }
        },
      ],
      styleOverrides : {
        root : {
          padding : "5px 20px",
        }
      }
    },
    MuiFormControl : {
      styleOverrides : {
        root : {
          "& fieldset" : {
            borderColor : "white"
          },
          "& label" : {
            fontSize : 16,
            color : "white"
          }
        },
      }
    },
    MuiFormLabel : {
      styleOverrides : {
        root : {
          color : "white",
          "&.Mui-focused" : {
            color : "white"
          }
        }
      }
    },
    MuiOutlinedInput : {
      styleOverrides : {
        root : {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline" : {
            borderColor : "white !important"
          },
          "&:hover.Mui-disabled .MuiOutlinedInput-notchedOutline" : {
            borderColor : "rgba(0, 0, 0, 0.3) !important"
          },
          
          "&:hover .MuiOutlinedInput-notchedOutline" : {
            borderColor : "white !important"
          },
        },
        input : {
          color : "white",
          fontSize : 16
        }
      }
    },
    MuiInput : {
      styleOverrides : {
        root : {
          '&:before, &:after': {
            borderBottom: 'none',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: 'none',
          },
          '&.Mui-focused:after': {
            borderBottom: 'none',
          },
        },
        input : {
          color : "black",
          fontSize : 14
        }
      }
    },
    MuiSvgIcon : {
      styleOverrides : {
        root : {
          color : "white"
        }
      }
    }
  }
})

const router = createBrowserRouter([
  { path : "/", element: <Home />},
  { path : "/register", element: <Register />},
  { path : "/menu", element: <Menu />},
  { path : "/history", element: (
    <ProtectedRoute redirectPath="/register" msg="You must register/log in to see reservation history">
      <History />
    </ProtectedRoute>
  )},
  { path : "/login", element: <Login />},
  { path : "/reservation", element: (
    <ProtectedRoute redirectPath="/register" msg="You must register/log in to make reservation">
      <Reservation />
    </ProtectedRoute>
  )},
  { path : "/new-password", element : <NewPassword />},
  { path : "/payment", element : <Payment />},
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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App