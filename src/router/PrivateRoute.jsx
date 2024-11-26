import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router';

export const PrivateRoute = ({ children }) => {


    const { logged } = useContext( AuthContext )
    console.log('Logged', logged);
    

  return (logged) ? children : <Navigate to="/login" />
}
