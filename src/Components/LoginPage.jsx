import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.username === username && parsedUser.password === password) {
        alert('Login successful!');
        navigate('/recipe'); // navigate to the meal component
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('User does not exist. Please sign up.');
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2 style={{ textAlign: "center", color: "red" }}>Login</h2>
        <p>Welcome to our continental recipe collection! For an exclusive culinary journey through the flavors of Europe, log in to unlock access to our handpicked recipes, curated just for you. 
        </p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
