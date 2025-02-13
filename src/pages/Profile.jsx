import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p>
      <div className="button-group">
        <button className="btn" onClick={() => navigate('/all-policies')}>All Policies</button>
        <button className="btn" onClick={() => navigate('/my-policies')}>Your Policies</button>
        <button className="btn" onClick={() => navigate('/all-claims')}>All Claims</button>
        <button className="btn" onClick={() => navigate('/all-payments')}>All Payments</button>
      </div>
    </div>
  );
};

export default Profile;
