import React, { useState } from 'react';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = () => {
      const user = { username, password };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Signup successful!');
    };
  
    return (
      <div className='popup'>
        <div className="popup-inner">
        <h2>Sign Up</h2>
        <p>Welcome to our continental recipe collection! For an exclusive culinary journey through the flavors of Europe, Sign up to unlock access to our handpicked recipes, curated just for you. 
        </p>
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
        />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
      </div>
    );
  };
  export default SignupPage;