// frontend/src/components/SignIn.js

import React, { useState } from 'react';
import { loginUser } from '../api';

const SignIn = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser({ email, password });
    if (data.token) {
      setToken(data.token);
      localStorage.setItem('token', data.token);
    } else {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
      <button type='submit'>Sign In</button>
    </form>
  );
};

export default SignIn;
