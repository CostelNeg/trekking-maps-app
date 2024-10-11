import React, { useState } from "react";
import './AuthPages.css';
//import {useNavigate} from 'react-router-dom';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
 // const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username,email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(data)); // Salva l'utente nel localStorage
     // navigate('/'); // Reindirizza alla home
    } else {
      alert(data.message); // Mostra l'errore
    }
  };

  return (
    <div className="auth-container">
        <form className="auth-form" onSubmit={handleSignup}>
            <h2>Registrati</h2>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button className="submit-btn" type="submit">Registrati</button>
        </form>
    </div>
);
}

export default SignupPage;
