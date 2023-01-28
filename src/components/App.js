import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import '../styles/App.css';

const LoginButton = () => {
}

const LogoutButton = () => {
}

const App = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn)

  return (
    <div id="main">
      {loggedIn
        ? <LogoutButton />
        : <LoginButton />
      }
    </div>
  )
}


export default App;
