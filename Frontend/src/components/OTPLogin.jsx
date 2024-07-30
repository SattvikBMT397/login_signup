import React, { useState } from 'react';
import axios from 'axios';

const OtpLogin = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/send-otp', { email });
      alert('OTP sent to your email!');
    } catch (error) {
      alert('Failed to send OTP!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login with OTP</h2>
      <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Send OTP</button>
    </form>
  );
};

export default OtpLogin;
