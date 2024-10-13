import React, {useState} from 'react';
import {login} from '../services/api.js';
import './AuthPages.css'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Previeni il comportamento predefinito del form

        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login riuscito:', data);
                localStorage.setItem('token', data.token); // Salva il token
                // Reindirizza o esegui altre azioni necessarie dopo il login
            } else {
                const errorData = await response.json();
                console.error('Errore nel login:', errorData.message);
                alert(errorData.message);
            }
        } catch (error) {
            console.error('Errore nel login:', error);
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