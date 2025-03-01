// frontend/src/components/SignUp.js

import React, { useState } from 'react';
import { registerUser } from '../api';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await registerUser({ username, email, password });
    if (data.message) {
      alert('Registration successful. Please log in.');
    } else {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' required />
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUp;
