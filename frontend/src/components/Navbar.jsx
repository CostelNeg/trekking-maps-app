import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import '../HomeNav.css'; 

const Navbar = () => {

  const {user, logout} = useAuth(); 
  const token = localStorage.getItem("token"); // Recupera il token
  const username = localStorage.getItem("username"); // Recupera il nome utente

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username"); // Rimuovi il nome utente
    window.location.reload(); // Ricarica la pagina per aggiornare lo stato
  };

  return (
    <nav className="navbar">
      <Link to="/">Trekking Italia</Link>
      {user ? (
        <>
          <div className="user-info">
            <span className="username">{username}</span>
            <img src={`${process.env.PUBLIC_URL}/img/profile.png`} title="profile icons"
              alt="User Icon"
              className="user-icon"
            />
          </div>
          <button onClick={logout} className="logout-btn">Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;