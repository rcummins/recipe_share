import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default (props) => {
  const {
    currentUser,
    logout,
    clearSessionErrors,
    clearRecipeErrors,
    clearRatingErrors } = props;

  const displaySessionInfo = currentUser ? (
    <div className="nav-session-info">

      <p className="nav-message">Welcome, { currentUser.username }</p>

      <button
        className="button-nav button-logout"
        onClick={() => {
          logout();
          clearRecipeErrors();
          clearRatingErrors();
        }}>Log out</button>

    </div>
  ) : (
    <div className="nav-session-info">

      <Link
        className="button-nav"
        to="/signup"
        onClick={clearSessionErrors} >Sign up</Link>

      <Link
        className="button-nav"
        to="/login"
        onClick={clearSessionErrors} >Log in</Link>

    </div>
  )

  const displayNavLinks = currentUser ? (
    <div className="nav-links">

      <NavLink
        className="nav-link"
        activeClassName="active"
        exact={true}
        onClick={() => {clearRecipeErrors(); clearRatingErrors(); }}
        to="/" >All Recipes</NavLink>

      <NavLink
        className="nav-link"
        activeClassName="active"
        onClick={() => { clearRecipeErrors(); clearRatingErrors(); }}
        to="/myrecipes" >My Recipes</NavLink>

      <NavLink
        className="nav-link"
        activeClassName="active"
        onClick={() => { clearRecipeErrors(); clearRatingErrors(); }}
        to="/myfavorites" >My Favorites</NavLink>

    </div>
  ) : (
    <div className="nav-links">

      <NavLink
        className="nav-link"
        activeClassName="active"
        exact={true}
        to="/" >All Recipes</NavLink>

    </div>
  )

  return(
    <header>

      <Link
        className="logo"
        to="/"
        onClick={() => {
          clearRecipeErrors();
          clearRatingErrors();
        }}>Recipe Share</Link>

      { displayNavLinks}

      { displaySessionInfo }
    </header>
  )
}
