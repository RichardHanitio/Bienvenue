import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const ProtectedRoute = ({children, redirectPath, msg}) => {
  const {user} = useContext(AuthContext)

  if (!user) {
    return <Navigate to={redirectPath} state={{msg : msg}} replace />
  }
  return children
}

export default ProtectedRoute