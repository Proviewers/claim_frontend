import React, { useState, useEffect } from 'react';
import api from '../api/api';

const AdminClaims = () => {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPendingClaims = async () => {
    try {
      const res = await api.get('/claims?status=Pending');
      setClaims(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPendingClaims();
  }, []);

  const handleApprove = async (claimId) => {
    setLoading(true);
    try {
      await api.put(`/claims/${claimId}`, { status: 'Approved' });
      alert('Claim approved successfully');
      fetchPendingClaims();
    } catch (err) {
      alert('Error approving claim');
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Pending Claims (Admin)</h2>
      {claims.length > 0 ? (
        claims.map(claim => (
          <div key={claim._id} className="card">
            <p>Policy: {claim.policy_id?.policy_type || 'N/A'}</p>
            <p>Claim Amount: ${claim.claim_amount}</p>
            <p>Status: {claim.status}</p>
            <button className="btn" onClick={() => handleApprove(claim._id)} disabled={loading}>Approve</button>
          </div>
        ))
      ) : (
        <p>No pending claims</p>
      )}
    </div>
  );
};

export default AdminClaims;
