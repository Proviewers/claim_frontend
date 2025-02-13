// // import React, { useState } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import api from '../api/api';

// // const PaymentPage = () => {
// //   const { state } = useLocation();
// //   const navigate = useNavigate();
// //   const { policy } = state || {};
// //   const [loading, setLoading] = useState(false);

// //   if (!policy) {
// //     return <p>No policy selected</p>;
// //   }

// //   const handlePay = async () => {
// //     setLoading(true);
// //     try {
// //       // Call POST /api/policies with { policyType } to create the policy & process payment.
// //       await api.post('/policies', { policyType: policy.type });
// //       alert('Payment successful! Your policy has been added.');
// //       navigate('/my-policies'); // Redirect to My Policies
// //     } catch (err) {
// //       alert('Payment failed');
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="container">
// //       <h2>Payment for {policy.type} Policy</h2>
// //       <p>Premium Amount: ${policy.premium_amount}</p>
// //       <button className="btn" onClick={handlePay} disabled={loading}>
// //         {loading ? 'Processing...' : 'Pay'}
// //       </button>
// //     </div>
// //   );
// // };

// // export default PaymentPage;

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import api from '../api/api';

// const PaymentPage = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { policy } = state || {};
//   const [loading, setLoading] = useState(false);

//   if (!policy) {
//     return <p>No policy selected</p>;
//   }

//   const handlePay = async () => {
//     setLoading(true);
//     try {
//       // Log what is being sent to the backend
//       console.log('Posting to /api/policies with:', { policyType: policy.type });
//       const res = await api.post('/policies', { policyType: policy.type });
//       console.log('Response:', res.data);
//       alert('Payment successful! Your policy has been added.');
//       navigate('/my-policies'); // Redirect to My Policies
//     } catch (err) {
//       // Log the error response from the backend for debugging
//       console.error('Error in PaymentPage:', err.response ? err.response.data : err);
//       alert(`Payment failed: ${err.response?.data?.message || 'Unknown error'}`);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="container">
//       <h2>Payment for {policy.type} Policy</h2>
//       <p>Premium Amount: ${policy.premium_amount}</p>
//       <button className="btn" onClick={handlePay} disabled={loading}>
//         {loading ? 'Processing...' : 'Pay'}
//       </button>
//     </div>
//   );
// };

// export default PaymentPage;


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api/api';

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { policy } = state || {};
  const [loading, setLoading] = useState(false);

  if (!policy) {
    return <p>No policy selected</p>;
  }

  const handlePay = async () => {
    setLoading(true);
    try {
      console.log('Posting to /api/policies with:', { policyType: policy.type });
      const res = await api.post('/policies', { policyType: policy.type });
      console.log('Response:', res.data);
      alert('Payment successful! Your policy has been added.');
      navigate('/my-policies'); // Redirect to My Policies
    } catch (err) {
      console.error('Error in PaymentPage:', err.response ? err.response.data : err);
      alert(`Payment failed: ${err.response?.data?.message || 'Unknown error'}`);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Payment for {policy.type} Policy</h2>
      <p>Premium Amount: ${policy.premium_amount}</p>
      <button className="btn" onClick={handlePay} disabled={loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </div>
  );
};

export default PaymentPage;
