import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="nav-bar">

      <p className="nav-message">Welcome, { currentUser.username }</p>

      <button
        className="button-nav button-logout"
        onClick={logout}>Log out</button>

    </div>
  ) : (
    <div className="nav-bar">

      <Link
        className="button-nav"
        to="/signup" >Sign up</Link>

      <Link
        className="button-nav"
        to="/login" >Log in</Link>

    </div>
  )
  return(
    <header>

      <Link className="logo" to="/">Recipe Share</Link>

      { display }
    </header>
  )
}