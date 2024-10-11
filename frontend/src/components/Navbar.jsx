import React from "react";
import { Link } from "react-router-dom";
import '../HomeNav.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/login'>Login</Link>
      <Link to='/'>Treaking Italia</Link>
      <Link to='/register'>Register</Link>
    </nav>
  );
};

export default Navbar;