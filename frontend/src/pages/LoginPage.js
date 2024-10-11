import React, {useState} from 'react';
import {login} from '../services/api.js';
import './AuthPages.css'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault(); // Previene il comportamento predefinito del modulo
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // username e password sono gli stati del tuo modulo
      });
    
      if (response.ok) {
        const data = await response.json();
        console.log('Login riuscito:', data);
      } else {
        console.error('Errore nel login:', response.statusText);
      }
    };

    return (
      <div className="auth-container">
          <form className="auth-form" onSubmit={handleLogin}>
              <h2>Accedi</h2>
              <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                  />
              </div>
              <button className="submit-btn" type="submit">Login</button>
          </form>
      </div>
  );
}
export default LoginPage;