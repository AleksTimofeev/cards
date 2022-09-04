import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/login'}>login</NavLink>
      <NavLink to={'/registration'}>registration</NavLink>
      <NavLink to={'/profile'}>profile</NavLink>
      <NavLink to={'/password-recovery'}>password recovery</NavLink>
      <NavLink to={'/change-password'}>change password</NavLink>
      <NavLink to={'/test-page'}>test page</NavLink>
    </div>
  );
};

export default Header;