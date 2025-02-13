// // import React, { useState, useEffect } from 'react';
// // import api from '../api/api';

// // const AllPayments = () => {
// //   const [payments, setPayments] = useState([]);

// //   useEffect(() => {
// //     const fetchPayments = async () => {
// //       try {
// //         const res = await api.get('/payments');
// //         setPayments(res.data);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     fetchPayments();
// //   }, []);

// //   return (
// //     <div className="container">
// //       <h2>All Payments</h2>
// //       {payments.length > 0 ? (
// //         payments.map(payment => (
// //           <div key={payment._id} className="card">
// //             <p>Policy ID: {payment.policy_id}</p>
// //             <p>Amount: ${payment.amount}</p>
// //             <p>Type: {payment.payment_type}</p>
// //             <p>Date: {new Date(payment.payment_date).toLocaleDateString()}</p>
// //           </div>
// //         ))
// //       ) : (
// //         <p>No payments found</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default AllPayments;


// import React, { useState, useEffect } from 'react';
// import api from '../api/api';
// import { useAuth } from '../context/AuthContext';

// const AllPayments = () => {
//   const { user } = useAuth();
//   const [payments, setPayments] = useState([]);

//   useEffect(() => {
//     const fetchPayments = async () => {
//       try {
//         const res = await api.get('/payments/my', {
//           params: { policyholder_id: user.id }
//         });
//         console.log("Fetched payments:", res.data);
//         setPayments(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     if (user && user.id) {
//       fetchPayments();
//     }
//   }, [user]);

//   return (
//     <div className="container">
//       <h2>All Payments</h2>
//       {payments.length > 0 ? (
//         payments.map(payment => (
//           <div key={payment._id} className="card">
//             <p>Policy ID: {payment.policy_id && payment.policy_id._id ? payment.policy_id._id : payment.policy_id}</p>
//             <p>Amount: ${payment.amount}</p>
//             <p>Type: {payment.payment_type}</p>
//             <p>Date: {new Date(payment.payment_date).toLocaleDateString()}</p>
//           </div>
//         ))
//       ) : (
//         <p>No payments found</p>
//       )}
//     </div>
//   );
// };

// export default AllPayments;


import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { useAuth } from '../context/AuthContext';

const AllPayments = () => {
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await api.get('/payments/my', {
          params: { policyholder_id: user.id }
        });
        console.log("Fetched payments:", res.data);
        setPayments(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (user && user.id) {
      fetchPayments();
    }
  }, [user]);

  return (
    <div className="container">
      <h2>All Payments</h2>
      {payments.length > 0 ? (
        payments.map(payment => (
          <div key={payment._id} className="card">
            <p>
              Policy ID:{" "}
              {typeof payment.policy_id === "object"
                ? payment.policy_id._id
                : payment.policy_id}
            </p>
            <p>Amount: ${payment.amount}</p>
            <p>Type: {payment.payment_type}</p>
            <p>Date: {new Date(payment.payment_date).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No payments found</p>
      )}
    </div>
  );
};

export default AllPayments;
