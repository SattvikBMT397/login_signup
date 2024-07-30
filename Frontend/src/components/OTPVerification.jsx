import React, { useState } from 'react';
import axios from 'axios';

const OtpVerification = () => {
  const [formData, setFormData] = useState({
    email: '',
    otp: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('api/auth/verify-otp', formData);
      alert('OTP verified successfully!');
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      alert('OTP verification failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Verify OTP</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="otp" placeholder="OTP" onChange={handleChange} required />
      <button type="submit">Verify OTP</button>
    </form>
  );
};

export default OtpVerification;
