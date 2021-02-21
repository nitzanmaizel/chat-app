import React from 'react'
import { Redirect, Route } from 'react-router';
import { UseProfile } from '../context/profile.context';

const PublicRoute = ({children,...routeProps}) => {
  const profile = UseProfile();

  if(profile){
    return <Redirect to="/"/>
  }

  return (
    <Route {...routeProps}>
      {children}
    </Route>
  )
}

export default PublicRoute
