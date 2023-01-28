import React, { useState } from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { onSignIn, onSignOut } from '../actions';
import '../styles/App.css';


const LoginButton = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null)

  return (
    <>
      <input type='text' ref={inputRef} id='username' />
      <button id="login-button" type='button' onClick={() => dispatch(onSignIn(inputRef.current.value))}>Login</button>
    </>
  )
}

const LogoutButton = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username)
  return (
    <>
      <span id='user'>Hello {username}</span>
      <button id='logout-button' type='button' onClick={() => dispatch(onSignOut())}>Logout</button>
    </>
  )
}

const App = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn)

  return (
    <div id="main">
      {loggedIn ? <LogoutButton /> : <LoginButton />}
    </div>
  )
}


export default App;
