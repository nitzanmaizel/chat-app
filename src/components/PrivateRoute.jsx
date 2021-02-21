import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router';
import {UseProfile} from '../context/profile.context'

const PrivateRoute = ({children,...routeProps}) => {
  const profile = UseProfile();

  if(!profile){
    return <Redirect to="/signin"/>
  }

  return (
    <Route {...routeProps}>
      {children}
    </Route>
  )
}

export default PrivateRoute
