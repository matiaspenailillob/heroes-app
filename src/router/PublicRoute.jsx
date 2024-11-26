import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router';

export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);

  return (!logged) ? children : <Navigate to="/marvel" /> // Si esta autenticado, se va a marvel
}
