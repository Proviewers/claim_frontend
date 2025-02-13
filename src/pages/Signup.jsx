import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact_info: '',
    date_of_birth: '',
  });
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      alert('Registration successful! Please login.');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Name:</label>
        <input 
          type="text" 
          value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          required 
        />
        <label>Email:</label>
        <input 
          type="email" 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          required 
        />
        <label>Password:</label>
        <input 
          type="password" 
          value={formData.password} 
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
          required 
        />
        <label>Contact Info:</label>
        <input 
          type="text" 
          value={formData.contact_info} 
          onChange={(e) => setFormData({ ...formData, contact_info: e.target.value })} 
          required 
        />
        <label>Date of Birth:</label>
        <input 
          type="date" 
          value={formData.date_of_birth} 
          onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })} 
          required 
        />
        <button type="submit" className="btn">Signup</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default Signup;
