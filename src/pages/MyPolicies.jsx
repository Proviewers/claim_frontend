import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const MyPolicies = () => {
  const [policies, setPolicies] = useState([]);
  const navigate = useNavigate();

  const fetchMyPolicies = async () => {
    try {
      const res = await api.get('/policies/my-policies');
      setPolicies(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMyPolicies();
  }, []);

  const handlePolicyClick = (policy) => {
    navigate(`/policy/${policy._id}`, { state: { policy } });
  };

  return (
    <div className="container">
      <h2>Your Policies</h2>
      {policies.length > 0 ? (
        policies.map((policy) => (
          <div key={policy._id} className="card" onClick={() => handlePolicyClick(policy)} style={{ cursor: 'pointer' }}>
            <h3>{policy.policy_type}</h3>
            <p>Coverage: ${policy.coverage_amount}</p>
            <p>Premium: ${policy.premium_amount}</p>
          </div>
        ))
      ) : (
        <p>No policies found</p>
      )}
    </div>
  );
};

export default MyPolicies;
