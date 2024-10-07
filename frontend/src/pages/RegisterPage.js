import React, { useState } from "react";
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
    <div>
      <h2>Registrati</h2>
      <form onSubmit={handleSignup}>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}

export default SignupPage;
