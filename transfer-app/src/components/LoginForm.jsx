import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
   
    if (username === 'JAMES' && password === 'JAMES') {
      setIsAuthenticated(true);
      navigate('/transfer'); 
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h1>Sign In</h1>
        <form className="auth-form" onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="login">Type "JAMES" to sign in</label>

            <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
            <input
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
