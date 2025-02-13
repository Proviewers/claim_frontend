import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar">
      <div className="nav-title">Insurance Portal</div>
      {user && <button className="btn" onClick={logout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
