import React, { useState } from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { onSignIn, onSignOut } from '../actions';
import '../styles/App.css';


const LoginButton = () => {
  const dispatch = useDispatch();
  // const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState('')
  const handleLogin = () => {
    // if (inputRef.current.value == '') {
    //   inputRef.current.focus()
    // }
    if (inputValue !== '') {
      dispatch(onSignIn(inputValue))

    }
  }

  return (
    <>
      {/* <input type='text' ref={inputRef} id='username' /> */}
      <input type='text' id='username' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button id="login-button" type='button' onClick={handleLogin}>Login</button>
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
