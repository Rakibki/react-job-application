import React, { useContext } from 'react'
import { useUserAuth } from './UserAuth'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const {user} = useContext(useUserAuth)
  console.log(user);
  if(user) {
    return children
  }
  return <Navigate to={"/login"}></Navigate>
}

export default PrivateRoute