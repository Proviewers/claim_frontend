import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const AllPolicies = () => {
  const [policies, setPolicies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const res = await api.get('/policies/available');
        setPolicies(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPolicies();
  }, []);

  const handleApply = (policy) => {
    // Navigate to Payment page, passing the selected policy via state
    console.log('Applying for policy:', policy);
    
    navigate('/payment', { state: { policy } });
  };

  return (
    <div className="container">
      <h2>All Available Policies</h2>
      {policies.length > 0 ? (
        policies.map((policy) => (
          <div key={policy.type} className="card">
            <h3>{policy.type}</h3>
            <p>Coverage: ${policy.coverage_amount}</p>
            <p>Premium: ${policy.premium_amount}</p>
            <p>{policy.description}</p>
            <button className="btn" onClick={() => handleApply(policy)}>Apply Now</button>
          </div>
        ))
      ) : (
        <p>No policies available</p>
      )}
    </div>
  );
};

export default AllPolicies;
