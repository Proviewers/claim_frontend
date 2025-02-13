// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import api from '../api/api';
// // // // // // // import { useLocation } from 'react-router-dom';

// // // // // // // const PolicyDetails = () => {
// // // // // // //   const { state } = useLocation();
// // // // // // //   const { policy } = state || {};
// // // // // // //   const [view, setView] = useState(''); // 'claims', 'newClaim', or 'payments'
// // // // // // //   const [claims, setClaims] = useState([]);
// // // // // // //   const [payments, setPayments] = useState([]);
// // // // // // //   const [newClaim, setNewClaim] = useState({ claim_amount: '', description: '' });

// // // // // // //   useEffect(() => {
// // // // // // //     if (view === 'claims') {
// // // // // // //       fetchClaims();
// // // // // // //     } else if (view === 'payments') {
// // // // // // //       fetchPayments();
// // // // // // //     }
// // // // // // //   }, [view]);

// // // // // // //   const fetchClaims = async () => {
// // // // // // //     try {
// // // // // // //       const res = await api.get('/claims');
// // // // // // //       // Filter claims related to this policy (compare as strings)
// // // // // // //       setClaims(res.data.filter(c => String(c.policy_id) === String(policy._id)));
// // // // // // //     } catch (err) {
// // // // // // //       console.error(err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const fetchPayments = async () => {
// // // // // // //     try {
// // // // // // //       const res = await api.get('/payments');
// // // // // // //       // Filter payments related to this policy (compare as strings)
// // // // // // //       setPayments(res.data.filter(p => String(p.policy_id) === String(policy._id)));
// // // // // // //     } catch (err) {
// // // // // // //       console.error(err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleNewClaimSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     try {
// // // // // // //       await api.post('/claims', { ...newClaim, policy_id: policy._id });
// // // // // // //       alert('Claim created successfully');
// // // // // // //       setNewClaim({ claim_amount: '', description: '' });
// // // // // // //       fetchClaims();
// // // // // // //       setView('claims');
// // // // // // //     } catch (err) {
// // // // // // //       alert('Failed to create claim');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   if (!policy) return <p>No policy data available</p>;

// // // // // // //   return (
// // // // // // //     <div className="container">
// // // // // // //       <h2>Policy Details</h2>
// // // // // // //       <h3>{policy.policy_type}</h3>
// // // // // // //       <p>Coverage: ${policy.coverage_amount}</p>
// // // // // // //       <p>Premium: ${policy.premium_amount}</p>
// // // // // // //       <div className="button-group">
// // // // // // //         <button className="btn" onClick={() => setView('claims')}>Claim History</button>
// // // // // // //         <button className="btn" onClick={() => setView('newClaim')}>New Claim</button>
// // // // // // //         <button className="btn" onClick={() => setView('payments')}>Payment History</button>
// // // // // // //       </div>

// // // // // // //       {view === 'claims' && (
// // // // // // //         <div>
// // // // // // //           <h3>Claim History</h3>
// // // // // // //           {claims.length > 0 ? (
// // // // // // //             claims.map(claim => (
// // // // // // //               <div key={claim._id} className="card">
// // // // // // //                 <p>Amount: ${claim.claim_amount}</p>
// // // // // // //                 <p>Status: {claim.status}</p>
// // // // // // //                 <p>Description: {claim.description}</p>
// // // // // // //               </div>
// // // // // // //             ))
// // // // // // //           ) : (
// // // // // // //             <p>No claims found</p>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {view === 'newClaim' && (
// // // // // // //         <form onSubmit={handleNewClaimSubmit} className="form">
// // // // // // //           <h3>New Claim</h3>
// // // // // // //           <label>Claim Amount:</label>
// // // // // // //           <input 
// // // // // // //             type="number" 
// // // // // // //             value={newClaim.claim_amount} 
// // // // // // //             onChange={(e) => setNewClaim({ ...newClaim, claim_amount: e.target.value })} 
// // // // // // //             required 
// // // // // // //           />
// // // // // // //           <label>Description:</label>
// // // // // // //           <textarea 
// // // // // // //             value={newClaim.description} 
// // // // // // //             onChange={(e) => setNewClaim({ ...newClaim, description: e.target.value })} 
// // // // // // //             required 
// // // // // // //           />
// // // // // // //           <button type="submit" className="btn">Submit Claim</button>
// // // // // // //         </form>
// // // // // // //       )}

// // // // // // //       {view === 'payments' && (
// // // // // // //         <div>
// // // // // // //           <h3>Payment History</h3>
// // // // // // //           {payments.length > 0 ? (
// // // // // // //             payments.map(payment => (
// // // // // // //               <div key={payment._id} className="card">
// // // // // // //                 <p>Amount: ${payment.amount}</p>
// // // // // // //                 <p>Type: {payment.payment_type}</p>
// // // // // // //                 <p>Date: {new Date(payment.payment_date).toLocaleDateString()}</p>
// // // // // // //               </div>
// // // // // // //             ))
// // // // // // //           ) : (
// // // // // // //             <p>No payments found</p>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PolicyDetails;



// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import api from '../api/api';
// // // // // // import { useLocation } from 'react-router-dom';

// // // // // // const PolicyDetails = () => {
// // // // // //   const { state } = useLocation();
// // // // // //   const { policy } = state || {};
// // // // // //   const [view, setView] = useState(''); // 'claims', 'newClaim', or 'payments'
// // // // // //   const [claims, setClaims] = useState([]);
// // // // // //   const [payments, setPayments] = useState([]);
// // // // // //   const [newClaim, setNewClaim] = useState({ claim_amount: '', description: '' });

// // // // // //   useEffect(() => {
// // // // // //     if (view === 'claims') {
// // // // // //       fetchClaims();
// // // // // //     } else if (view === 'payments') {
// // // // // //       fetchPayments();
// // // // // //     }
// // // // // //   }, [view]);

// // // // // //   const fetchClaims = async () => {
// // // // // //     try {
// // // // // //       const res = await api.get('/claims');
// // // // // //       // Filter claims related to this policy (compare as strings)
// // // // // //       setClaims(res.data.filter(c => String(c.policy_id) === String(policy._id)));
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   const fetchPayments = async () => {
// // // // // //     try {
// // // // // //       const res = await api.get('/payments');
// // // // // //       // Filter payments related to this policy (compare as strings)
// // // // // //       setPayments(res.data.filter(p => String(p.policy_id) === String(policy._id)));
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleNewClaimSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     try {
// // // // // //       await api.post('/claims', { 
// // // // // //         ...newClaim, 
// // // // // //         policy_id: policy._id,
// // // // // //         claim_date: new Date()  // <-- Added claim_date field
// // // // // //       });
// // // // // //       alert('Claim created successfully');
// // // // // //       setNewClaim({ claim_amount: '', description: '' });
// // // // // //       fetchClaims();
// // // // // //       setView('claims');
// // // // // //     } catch (err) {
// // // // // //       alert('Failed to create claim');
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   if (!policy) return <p>No policy data available</p>;

// // // // // //   return (
// // // // // //     <div className="container">
// // // // // //       <h2>Policy Details</h2>
// // // // // //       <h3>{policy.policy_type}</h3>
// // // // // //       <p>Coverage: ${policy.coverage_amount}</p>
// // // // // //       <p>Premium: ${policy.premium_amount}</p>
// // // // // //       <div className="button-group">
// // // // // //         <button className="btn" onClick={() => setView('claims')}>Claim History</button>
// // // // // //         <button className="btn" onClick={() => setView('newClaim')}>New Claim</button>
// // // // // //         <button className="btn" onClick={() => setView('payments')}>Payment History</button>
// // // // // //       </div>

// // // // // //       {view === 'claims' && (
// // // // // //         <div>
// // // // // //           <h3>Claim History</h3>
// // // // // //           {claims.length > 0 ? (
// // // // // //             claims.map(claim => (
// // // // // //               <div key={claim._id} className="card">
// // // // // //                 <p>Amount: ${claim.claim_amount}</p>
// // // // // //                 <p>Status: {claim.status}</p>
// // // // // //                 <p>Description: {claim.description}</p>
// // // // // //                 <p>Date: {new Date(claim.claim_date).toLocaleDateString()}</p>
// // // // // //               </div>
// // // // // //             ))
// // // // // //           ) : (
// // // // // //             <p>No claims found</p>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {view === 'newClaim' && (
// // // // // //         <form onSubmit={handleNewClaimSubmit} className="form">
// // // // // //           <h3>New Claim</h3>
// // // // // //           <label>Claim Amount:</label>
// // // // // //           <input
// // // // // //             type="number"
// // // // // //             value={newClaim.claim_amount}
// // // // // //             onChange={(e) => setNewClaim({ ...newClaim, claim_amount: e.target.value })}
// // // // // //             required
// // // // // //           />
// // // // // //           <label>Description:</label>
// // // // // //           <textarea
// // // // // //             value={newClaim.description}
// // // // // //             onChange={(e) => setNewClaim({ ...newClaim, description: e.target.value })}
// // // // // //             required
// // // // // //           />
// // // // // //           <button type="submit" className="btn">Submit Claim</button>
// // // // // //         </form>
// // // // // //       )}

// // // // // //       {view === 'payments' && (
// // // // // //         <div>
// // // // // //           <h3>Payment History</h3>
// // // // // //           {payments.length > 0 ? (
// // // // // //             payments.map(payment => (
// // // // // //               <div key={payment._id} className="card">
// // // // // //                 <p>Amount: ${payment.amount}</p>
// // // // // //                 <p>Type: {payment.payment_type}</p>
// // // // // //                 <p>Date: {new Date(payment.payment_date).toLocaleDateString()}</p>
// // // // // //               </div>
// // // // // //             ))
// // // // // //           ) : (
// // // // // //             <p>No payments found</p>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PolicyDetails;

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import api from '../api/api';
// // // // // import { useLocation } from 'react-router-dom';

// // // // // const PolicyDetails = () => {
// // // // //   const { state } = useLocation();
// // // // //   const { policy } = state || {};
// // // // //   const [view, setView] = useState(''); // 'claims', 'newClaim', or 'payments'
// // // // //   const [claims, setClaims] = useState([]);
// // // // //   const [payments, setPayments] = useState([]);
// // // // //   const [newClaim, setNewClaim] = useState({ claim_amount: '', description: '' });

// // // // //   useEffect(() => {
// // // // //     if (view === 'claims') {
// // // // //       fetchClaims();
// // // // //     } else if (view === 'payments') {
// // // // //       fetchPayments();
// // // // //     }
// // // // //   }, [view]);

// // // // //   const fetchClaims = async () => {
// // // // //     try {
// // // // //       const res = await api.get('/claims');
// // // // //       // Filter claims related to this policy.
// // // // //       // If the claim's policy_id is populated, compare using its _id; otherwise, use policy_id directly.
// // // // //       setClaims(
// // // // //         res.data.filter(c => {
// // // // //           const policyId = c.policy_id && c.policy_id._id ? c.policy_id._id : c.policy_id;
// // // // //           return String(policyId) === String(policy._id);
// // // // //         })
// // // // //       );
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   const fetchPayments = async () => {
// // // // //     try {
// // // // //       const res = await api.get('/payments');
// // // // //       // Similarly, filter payments related to this policy.
// // // // //       setPayments(
// // // // //         res.data.filter(p => {
// // // // //           const policyId = p.policy_id && p.policy_id._id ? p.policy_id._id : p.policy_id;
// // // // //           return String(policyId) === String(policy._id);
// // // // //         })
// // // // //       );
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   const handleNewClaimSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       await api.post('/claims', { 
// // // // //         ...newClaim, 
// // // // //         policy_id: policy._id,
// // // // //         claim_date: new Date()  // Added claim_date field
// // // // //       });
// // // // //       alert('Claim created successfully');
// // // // //       setNewClaim({ claim_amount: '', description: '' });
// // // // //       fetchClaims();
// // // // //       setView('claims');
// // // // //     } catch (err) {
// // // // //       alert('Failed to create claim');
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   if (!policy) return <p>No policy data available</p>;

// // // // //   return (
// // // // //     <div className="container">
// // // // //       <h2>Policy Details</h2>
// // // // //       <h3>{policy.policy_type}</h3>
// // // // //       <p>Coverage: ${policy.coverage_amount}</p>
// // // // //       <p>Premium: ${policy.premium_amount}</p>
// // // // //       <div className="button-group">
// // // // //         <button className="btn" onClick={() => setView('claims')}>Claim History</button>
// // // // //         <button className="btn" onClick={() => setView('newClaim')}>New Claim</button>
// // // // //         <button className="btn" onClick={() => setView('payments')}>Payment History</button>
// // // // //       </div>

// // // // //       {view === 'claims' && (
// // // // //         <div>
// // // // //           <h3>Claim History</h3>
// // // // //           {claims.length > 0 ? (
// // // // //             claims.map(claim => (
// // // // //               <div key={claim._id} className="card">
// // // // //                 <p>Amount: ${claim.claim_amount}</p>
// // // // //                 <p>Status: {claim.status}</p>
// // // // //                 <p>Description: {claim.description}</p>
// // // // //                 <p>Date: {new Date(claim.claim_date).toLocaleDateString()}</p>
// // // // //               </div>
// // // // //             ))
// // // // //           ) : (
// // // // //             <p>No claims found</p>
// // // // //           )}
// // // // //         </div>
// // // // //       )}

// // // // //       {view === 'newClaim' && (
// // // // //         <form onSubmit={handleNewClaimSubmit} className="form">
// // // // //           <h3>New Claim</h3>
// // // // //           <label>Claim Amount:</label>
// // // // //           <input
// // // // //             type="number"
// // // // //             value={newClaim.claim_amount}
// // // // //             onChange={(e) => setNewClaim({ ...newClaim, claim_amount: e.target.value })}
// // // // //             required
// // // // //           />
// // // // //           <label>Description:</label>
// // // // //           <textarea
// // // // //             value={newClaim.description}
// // // // //             onChange={(e) => setNewClaim({ ...newClaim, description: e.target.value })}
// // // // //             required
// // // // //           />
// // // // //           <button type="submit" className="btn">Submit Claim</button>
// // // // //         </form>
// // // // //       )}

// // // // //       {view === 'payments' && (
// // // // //         <div>
// // // // //           <h3>Payment History</h3>
// // // // //           {payments.length > 0 ? (
// // // // //             payments.map(payment => (
// // // // //               <div key={payment._id} className="card">
// // // // //                 <p>Amount: ${payment.amount}</p>
// // // // //                 <p>Type: {payment.payment_type}</p>
// // // // //                 <p>Date: {new Date(payment.payment_date).toLocaleDateString()}</p>
// // // // //               </div>
// // // // //             ))
// // // // //           ) : (
// // // // //             <p>No payments found</p>
// // // // //           )}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PolicyDetails;






// // // // import React, { useState, useEffect } from 'react';
// // // // import api from '../api/api';
// // // // import { useLocation } from 'react-router-dom';
// // // // import { useAuth } from '../context/AuthContext';

// // // // const PolicyDetails = () => {
// // // //   const { state } = useLocation();
// // // //   const { policy } = state || {};
// // // //   const { user } = useAuth();
// // // //   const [view, setView] = useState(''); // 'claims', 'newClaim', or 'payments'
// // // //   const [claims, setClaims] = useState([]);
// // // //   const [payments, setPayments] = useState([]);
// // // //   const [newClaim, setNewClaim] = useState({ claim_amount: '', description: '' });

// // // //   useEffect(() => {
// // // //     if (view === 'claims') {
// // // //       fetchClaims();
// // // //     } else if (view === 'payments') {
// // // //       fetchPayments();
// // // //     }
// // // //   }, [view]);

// // // //   const fetchClaims = async () => {
// // // //     try {
// // // //       const res = await api.get('/claims');
// // // //       // Filter claims related to this policy.
// // // //       setClaims(
// // // //         res.data.filter(c => {
// // // //           const pId = c.policy_id && c.policy_id._id ? c.policy_id._id : c.policy_id;
// // // //           return String(pId) === String(policy._id);
// // // //         })
// // // //       );
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   const fetchPayments = async () => {
// // // //     try {
// // // //         console.log(user.id, policy._id);
// // // //       const res = await api.get('/payments/filter', {
// // // //         params: { policyholder_id: user.id, policy_id: policy._id }
// // // //       });
// // // //       setPayments(res.data);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   const handleNewClaimSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await api.post('/claims', { 
// // // //         ...newClaim, 
// // // //         policy_id: policy._id,
// // // //         claim_date: new Date()  // Add the current date as claim_date
// // // //       });
// // // //       alert('Claim created successfully');
// // // //       setNewClaim({ claim_amount: '', description: '' });
// // // //       fetchClaims();
// // // //       setView('claims');
// // // //     } catch (err) {
// // // //       alert('Failed to create claim');
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   if (!policy) return <p>No policy data available</p>;

// // // //   return (
// // // //     <div className="container">
// // // //       <h2>Policy Details</h2>
// // // //       <h3>{policy.policy_type}</h3>
// // // //       <p>Coverage: ${policy.coverage_amount}</p>
// // // //       <p>Premium: ${policy.premium_amount}</p>
// // // //       <div className="button-group">
// // // //         <button className="btn" onClick={() => setView('claims')}>Claim History</button>
// // // //         <button className="btn" onClick={() => setView('newClaim')}>New Claim</button>
// // // //         <button className="btn" onClick={() => setView('payments')}>Payment History</button>
// // // //       </div>

// // // //       {view === 'claims' && (
// // // //         <div>
// // // //           <h3>Claim History</h3>
// // // //           {claims.length > 0 ? (
// // // //             claims.map(claim => (
// // // //               <div key={claim._id} className="card">
// // // //                 <p>Amount: ${claim.claim_amount}</p>
// // // //                 <p>Status: {claim.status}</p>
// // // //                 <p>Description: {claim.description}</p>
// // // //                 <p>Date: {new Date(claim.claim_date).toLocaleDateString()}</p>
// // // //               </div>
// // // //             ))
// // // //           ) : (
// // // //             <p>No claims found</p>
// // // //           )}
// // // //         </div>
// // // //       )}

// // // //       {view === 'newClaim' && (
// // // //         <form onSubmit={handleNewClaimSubmit} className="form">
// // // //           <h3>New Claim</h3>
// // // //           <label>Claim Amount:</label>
// // // //           <input
// // // //             type="number"
// // // //             value={newClaim.claim_amount}
// // // //             onChange={(e) => setNewClaim({ ...newClaim, claim_amount: e.target.value })}
// // // //             required
// // // //           />
// // // //           <label>Description:</label>
// // // //           <textarea
// // // //             value={newClaim.description}
// // // //             onChange={(e) => setNewClaim({ ...newClaim, description: e.target.value })}
// // // //             required
// // // //           />
// // // //           <button type="submit" className="btn">Submit Claim</button>
// // // //         </form>
// // // //       )}

// // // //       {view === 'payments' && (
// // // //         <div>
// // // //           <h3>Payment History</h3>
// // // //           {payments.length > 0 ? (
// // // //             payments.map(payment => (
// // // //               <div key={payment._id} className="card">
// // // //                 <p>Amount: ${payment.amount}</p>
// // // //                 <p>Type: {payment.payment_type}</p>
// // // //                 <p>Date: {new Date(payment.payment_date).toLocaleDateString()}</p>
// // // //               </div>
// // // //             ))
// // // //           ) : (
// // // //             <p>No payments found</p>
// // // //           )}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PolicyDetails;
// // // import React, { useState, useEffect } from 'react';
// // // import api from '../api/api';
// // // import { useLocation } from 'react-router-dom';
// // // import { useAuth } from '../context/AuthContext';

// // // const PolicyDetails = () => {
// // //   const { state } = useLocation();
// // //   const { policy } = state || {};
// // //   const { user } = useAuth();
// // //   const [view, setView] = useState(''); // 'claims', 'newClaim', or 'payments'
// // //   const [claims, setClaims] = useState([]);
// // //   const [payments, setPayments] = useState([]);
// // //   const [newClaim, setNewClaim] = useState({ claim_amount: '', description: '' });

// // //   useEffect(() => {
// // //     if (view === 'claims') {
// // //       fetchClaims();
// // //     } else if (view === 'payments') {
// // //       fetchPayments();
// // //     }
// // //   }, [view]);

// // //   const fetchClaims = async () => {
// // //     try {
// // //       const res = await api.get('/claims');
// // //       // Filter claims related to this policy.
// // //       setClaims(
// // //         res.data.filter(c => {
// // //           const pId = c.policy_id && c.policy_id._id ? c.policy_id._id : c.policy_id;
// // //           return String(pId) === String(policy._id);
// // //         })
// // //       );
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   // Updated fetchPayments using the /payments/filter endpoint.
// // //   const fetchPayments = async () => {
// // //     try {
// // //       const res = await api.get('/payments/filter', {
// // //         params: { policyholder_id: user.id, policy_id: policy._id }
// // //       });
// // //       setPayments(res.data);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const handleNewClaimSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await api.post('/claims', { 
// // //         ...newClaim, 
// // //         policy_id: policy._id,
// // //         claim_date: new Date()  // Add the current date as claim_date
// // //       });
// // //       alert('Claim created successfully');
// // //       setNewClaim({ claim_amount: '', description: '' });
// // //       fetchClaims();
// // //       setView('claims');
// // //     } catch (err) {
// // //       alert('Failed to create claim');
// // //       console.error(err);
// // //     }
// // //   };

// // //   if (!policy) return <p>No policy data available</p>;

// // //   return (
// // //     <div className="container">
// // //       <h2>Policy Details</h2>
// // //       <h3>{policy.policy_type}</h3>
// // //       <p>Coverage: ${policy.coverage_amount}</p>
// // //       <p>Premium: ${policy.premium_amount}</p>
// // //       <div className="button-group">
// // //         <button className="btn" onClick={() => setView('claims')}>Claim History</button>
// // //         <button className="btn" onClick={() => setView('newClaim')}>New Claim</button>
// // //         <button className="btn" onClick={() => setView('payments')}>Payment History</button>
// // //       </div>

// // //       {view === 'claims' && (
// // //         <div>
// // //           <h3>Claim History</h3>
// // //           {claims.length > 0 ? (
// // //             claims.map(claim => (
// // //               <div key={claim._id} className="card">
// // //                 <p>Amount: ${claim.claim_amount}</p>
// // //                 <p>Status: {claim.status}</p>
// // //                 <p>Description: {claim.description}</p>
// // //                 <p>Date: {new Date(claim.claim_date).toLocaleDateString()}</p>
// // //               </div>
// // //             ))
// // //           ) : (
// // //             <p>No claims found</p>
// // //           )}
// // //         </div>
// // //       )}

// // //       {view === 'newClaim' && (
// // //         <form onSubmit={handleNewClaimSubmit} className="form">
// // //           <h3>New Claim</h3>
// // //           <label>Claim Amount:</label>
// // //           <input
// // //             type="number"
// // //             value={newClaim.claim_amount}
// // //             onChange={(e) => setNewClaim({ ...newClaim, claim_amount: e.target.value })}
// // //             required
// // //           />
// // //           <label>Description:</label>
// // //           <textarea
// // //             value={newClaim.description}
// // //             onChange={(e) => setNewClaim({ ...newClaim, description: e.target.value })}
// // //             required
// // //           />
// // //           <button type="submit" className="btn">Submit Claim</button>
// // //         </form>
// // //       )}

// // //       {view === 'payments' && (
// // //         <div>
// // //           <h3>Payment History</h3>
// // //           {payments.length > 0 ? (
// // //             payments.map(payment => (
// // //               <div key={payment._id} className="card">
// // //                 <p>Amount: ${payment.amount}</p>
// // //                 <p>Type: {payment.payment_type}</p>
// // //                 <p>Date: {new Date(payment.payment_date).toLocaleDateString()}</p>
// // //               </div>
// // //             ))
// // //           ) : (
// // //             <p>No payments found</p>
// // //           )}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default PolicyDetails;


// // // src/pages/PolicyDetails.jsx
// // import React, { useState, useEffect } from 'react';
// // import api from '../api/api';
// // import { useLocation } from 'react-router-dom';
// // import { useAuth } from '../context/AuthContext';

// // const PolicyDetails = () => {
// //   const { state } = useLocation();
// //   const { policy } = state || {};
// //   const { user } = useAuth();
// //   const [view, setView] = useState(''); // 'claims', 'newClaim', or 'payments'
// //   const [claims, setClaims] = useState([]);
// //   const [payments, setPayments] = useState([]);
// //   const [newClaim, setNewClaim] = useState({ claim_amount: '', description: '' });

// //   useEffect(() => {
// //     if (view === 'claims') {
// //       fetchClaims();
// //     } else if (view === 'payments') {
// //       fetchPayments();
// //     }
// //   }, [view]);

// //   const fetchClaims = async () => {
// //     try {
// //       const res = await api.get('/claims');
// //       // Filter claims related to this policy. If policy_id is populated, use its _id.
// //       setClaims(
// //         res.data.filter(c => {
// //           const pId = c.policy_id && c.policy_id._id ? c.policy_id._id : c.policy_id;
// //           return String(pId) === String(policy._id);
// //         })
// //       );
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   // Use the filter endpoint to fetch payments for this policy and user.
// //   const fetchPayments = async () => {
// //     try {
// //       const res = await api.get('/payments/filter', {
// //         params: { policyholder_id: user.id, policy_id: policy._id }
// //       });
// //       setPayments(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleNewClaimSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await api.post('/claims', { 
// //         ...newClaim, 
// //         policy_id: policy._id,
// //         claim_date: new Date()  // Add current date as claim_date
// //       });
// //       alert('Claim created successfully');
// //       setNewClaim({ claim_amount: '', description: '' });
// //       fetchClaims();
// //       setView('claims');
// //     } catch (err) {
// //       alert('Failed to create claim');
// //       console.error(err);
// //     }
// //   };

// //   if (!policy) return <p>No policy data available</p>;

// //   return (
// //     <div className="container">
// //       <h2>Policy Details</h2>
// //       <h3>{policy.policy_type}</h3>
// //       <p>Coverage: ${policy.coverage_amount}</p>
// //       <p>Premium: ${policy.premium_amount}</p>
// //       <div className="button-group">
// //         <button className="btn" onClick={() => setView('claims')}>Claim History</button>
// //         <button className="btn" onClick={() => setView('newClaim')}>New Claim</button>
// //         <button className="btn" onClick={() => setView('payments')}>Payment History</button>
// //       </div>

// //       {view === 'claims' && (
// //         <div>
// //           <h3>Claim History</h3>
// //           {claims.length > 0 ? (
// //             claims.map(claim => (
// //               <div key={claim._id} className="card">
// //                 <p>Amount: ${claim.claim_amount}</p>
// //                 <p>Status: {claim.status}</p>
// //                 <p>Description: {claim.description}</p>
// //                 <p>Date: {new Date(claim.claim_date).toLocaleDateString()}</p>
// //               </div>
// //             ))
// //           ) : (
// //             <p>No claims found</p>
// //           )}
// //         </div>
// //       )}

// //       {view === 'newClaim' && (
// //         <form onSubmit={handleNewClaimSubmit} className="form">
// //           <h3>New Claim</h3>
// //           <label>Claim Amount:</label>
// //           <input
// //             type="number"
// //             value={newClaim.claim_amount}
// //             onChange={(e) => setNewClaim({ ...newClaim, claim_amount: e.target.value })}
// //             required
// //           />
// //           <label>Description:</label>
// //           <textarea
// //             value={newClaim.description}
// //             onChange={(e) => setNewClaim({ ...newClaim, description: e.target.value })}
// //             required
// //           />
// //           <button type="submit" className="btn">Submit Claim</button>
// //         </form>
// //       )}

// //       {view === 'payments' && (
// //         <div>
// //           <h3>Payment History</h3>
// //           {payments.length > 0 ? (
// //             payments.map(payment => (
// //               <div key={payment._id} className="card">
// //                 <p>Amount: ${payment.amount}</p>
// //                 <p>Type: {payment.payment_type}</p>
// //                 <p>Date: {new Date(payment.payment_date).toLocaleDateString()}</p>
// //               </div>
// //             ))
// //           ) : (
// //             <p>No payments found</p>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default PolicyDetails;


// // src/pages/PolicyDetails.jsx
// import React, { useState, useEffect } from 'react';
// import api from '../api/api';
// import { useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const PolicyDetails = () => {
//   const { state } = useLocation();
//   const { policy } = state || {};
//   const { user } = useAuth();
//   const [view, setView] = useState(''); // 'claims', 'newClaim', or 'payments'
//   const [claims, setClaims] = useState([]);
//   const [payments, setPayments] = useState([]);
//   const [newClaim, setNewClaim] = useState({ claim_amount: '', description: '' });

//   useEffect(() => {
//     if (view === 'claims') {
//       fetchClaims();
//     } else if (view === 'payments') {
//       fetchPayments();
//     }
//   }, [view]);

//   const fetchClaims = async () => {
//     try {
//       const res = await api.get('/claims');
//       // Filter claims related to this policy.
//       setClaims(
//         res.data.filter(c => {
//           const pId = c.policy_id && c.policy_id._id ? c.policy_id._id : c.policy_id;
//           return String(pId) === String(policy._id);
//         })
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Use the filter endpoint to fetch payments for this policy and user.
//   const fetchPayments = async () => {
//     console.log(user.id, policy._id);
    
//     try {
//       const res = await api.get('/payments/filter', {
//         params: { policyholder_id: user.id, policy_id: policy._id }
//       });
//       setPayments(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleNewClaimSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('/claims', { 
//         ...newClaim, 
//         policy_id: policy._id,
//         claim_date: new Date()  // Add current date as claim_date
//       });
//       alert('Claim created successfully');
//       setNewClaim({ claim_amount: '', description: '' });
//       fetchClaims();
//       setView('claims');
//     } catch (err) {
//       alert('Failed to create claim');
//       console.error(err);
//     }
//   };

//   if (!policy) return <p>No policy data available</p>;

//   return (
//     <div className="container">
//       <h2>Policy Details</h2>
//       <h3>{policy.policy_type}</h3>
//       <p>Coverage: ${policy.coverage_amount}</p>
//       <p>Premium: ${policy.premium_amount}</p>
//       <div className="button-group">
//         <button className="btn" onClick={() => setView('claims')}>Claim History</button>
//         <button className="btn" onClick={() => setView('newClaim')}>New Claim</button>
//         <button className="btn" onClick={() => setView('payments')}>Payment History</button>
//       </div>

//       {view === 'claims' && (
//         <div>
//           <h3>Claim History</h3>
//           {claims.length > 0 ? (
//             claims.map(claim => (
//               <div key={claim._id} className="card">
//                 <p>Amount: ${claim.claim_amount}</p>
//                 <p>Status: {claim.status}</p>
//                 <p>Description: {claim.description}</p>
//                 <p>Date: {new Date(claim.claim_date).toLocaleDateString()}</p>
//               </div>
//             ))
//           ) : (
//             <p>No claims found</p>
//           )}
//         </div>
//       )}

//       {view === 'newClaim' && (
//         <form onSubmit={handleNewClaimSubmit} className="form">
//           <h3>New Claim</h3>
//           <label>Claim Amount:</label>
//           <input
//             type="number"
//             value={newClaim.claim_amount}
//             onChange={(e) => setNewClaim({ ...newClaim, claim_amount: e.target.value })}
//             required
//           />
//           <label>Description:</label>
//           <textarea
//             value={newClaim.description}
//             onChange={(e) => setNewClaim({ ...newClaim, description: e.target.value })}
//             required
//           />
//           <button type="submit" className="btn">Submit Claim</button>
//         </form>
//       )}

//       {view === 'payments' && (
//         <div>
//           <h3>Payment History</h3>
//           {payments.length > 0 ? (
//             payments.map(payment => (
//               <div key={payment._id} className="card">
//                 <p>Amount: ${payment.amount}</p>
//                 <p>Type: {payment.payment_type}</p>
//                 <p>Date: {new Date(payment.payment_date).toLocaleDateString()}</p>
//               </div>
//             ))
//           ) : (
//             <p>No payments found</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PolicyDetails;

import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PolicyDetails = () => {
  const { state } = useLocation();
  const { policy } = state || {};
  const { user } = useAuth();
  const [view, setView] = useState(''); // possible values: 'claims', 'newClaim', 'payments'
  const [claims, setClaims] = useState([]);
  const [payments, setPayments] = useState([]);
  const [newClaim, setNewClaim] = useState({ claim_amount: '', description: '' });

  useEffect(() => {
    if (view === 'claims') {
      fetchClaims();
    } else if (view === 'payments') {
      fetchPayments();
    }
  }, [view]);

  const fetchClaims = async () => {
    try {
      const res = await api.get('/claims');
      // Filter claims related to this policy.
      const filteredClaims = res.data.filter(c => {
        const pId = c.policy_id && c.policy_id._id ? c.policy_id._id : c.policy_id;
        return String(pId) === String(policy._id);
      });
      console.log("Filtered claims:", filteredClaims);
      setClaims(filteredClaims);
    } catch (err) {
      console.error(err);
    }
  };

  // Updated fetchPayments with added logging
  const fetchPayments = async () => {
    try {
      // Log the parameters being sent to the endpoint
      console.log("Fetching payments with parameters:", {
        policyholder_id: user.id,
        policy_id: policy._id
      });
      const res = await api.get('/payments/filter', {
        params: { policyholder_id: user.id, policy_id: policy._id }
      });
      console.log("Fetched payments from backend:", res.data);
      setPayments(res.data);
    } catch (err) {
      console.error("Error fetching payments:", err);
    }
  };

  const handleNewClaimSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/claims', { 
        ...newClaim, 
        policy_id: policy._id,
        claim_date: new Date()  // Add current date as claim_date
      });
      alert('Claim created successfully');
      setNewClaim({ claim_amount: '', description: '' });
      fetchClaims();
      setView('claims');
    } catch (err) {
      alert('Failed to create claim');
      console.error(err);
    }
  };

  if (!policy) return <p>No policy data available</p>;

  return (
    <div className="container">
      <h2>Policy Details</h2>
      <h3>{policy.policy_type}</h3>
      <p>Coverage: ${policy.coverage_amount}</p>
      <p>Premium: ${policy.premium_amount}</p>
      <div className="button-group">
        <button className="btn" onClick={() => setView('claims')}>Claim History</button>
        <button className="btn" onClick={() => setView('newClaim')}>New Claim</button>
        <button className="btn" onClick={() => setView('payments')}>Payment History</button>
      </div>

      {view === 'claims' && (
        <div>
          <h3>Claim History</h3>
          {claims.length > 0 ? (
            claims.map(claim => (
              <div key={claim._id} className="card">
                <p>Amount: ${claim.claim_amount}</p>
                <p>Status: {claim.status}</p>
                <p>Description: {claim.description}</p>
                <p>Date: {new Date(claim.claim_date).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No claims found</p>
          )}
        </div>
      )}

      {view === 'newClaim' && (
        <form onSubmit={handleNewClaimSubmit} className="form">
          <h3>New Claim</h3>
          <label>Claim Amount:</label>
          <input
            type="number"
            value={newClaim.claim_amount}
            onChange={(e) => setNewClaim({ ...newClaim, claim_amount: e.target.value })}
            required
          />
          <label>Description:</label>
          <textarea
            value={newClaim.description}
            onChange={(e) => setNewClaim({ ...newClaim, description: e.target.value })}
            required
          />
          <button type="submit" className="btn">Submit Claim</button>
        </form>
      )}

      {view === 'payments' && (
        <div>
          <h3>Payment History</h3>
          {payments.length > 0 ? (
            payments.map(payment => (
              <div key={payment._id} className="card">
                <p>Amount: ${payment.amount}</p>
                <p>Type: {payment.payment_type}</p>
                <p>Date: {new Date(payment.payment_date).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No payments found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PolicyDetails;
