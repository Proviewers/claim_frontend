// // // import React, { useState, useEffect } from 'react';
// // // import api from '../api/api';

// // // const AllClaims = () => {
// // //   const [claims, setClaims] = useState([]);

// // //   useEffect(() => {
// // //     const fetchClaims = async () => {
// // //       try {
// // //         const res = await api.get('/claims');
// // //         setClaims(res.data);
// // //       } catch (err) {
// // //         console.error(err);
// // //       }
// // //     };
// // //     fetchClaims();
// // //   }, []);

// // //   return (
// // //     <div className="container">
// // //       <h2>All Claims</h2>
// // //       {claims.length > 0 ? (
// // //         claims.map(claim => (
// // //           <div key={claim._id} className="card">
// // //             <p>Policy ID: {claim.policy_id}</p>
// // //             <p>Claim Amount: ${claim.claim_amount}</p>
// // //             <p>Status: {claim.status}</p>
// // //             <p>Description: {claim.description}</p>
// // //           </div>
// // //         ))
// // //       ) : (
// // //         <p>No claims found</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default AllClaims;
// // import React, { useState, useEffect } from 'react';
// // import api from '../api/api';

// // const AllClaims = () => {
// //   const [claims, setClaims] = useState([]);

// //   useEffect(() => {
// //     const fetchClaims = async () => {
// //       try {
// //         const res = await api.get('/claims');
// //         setClaims(res.data);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     fetchClaims();
// //   }, []);

// //   return (
// //     <div className="container">
// //       <h2>All Claims</h2>
// //       {claims.length > 0 ? (
// //         claims.map(claim => (
// //           <div key={claim._id} className="card">
// //             <p>
// //               Policy ID:{" "}
// //               {typeof claim.policy_id === "object"
// //                 ? claim.policy_id._id
// //                 : claim.policy_id}
// //             </p>
// //             <p>Claim Amount: ${claim.claim_amount}</p>
// //             <p>Status: {claim.status}</p>
// //             <p>Description: {claim.description}</p>
// //             <p>
// //               Date:{" "}
// //               {claim.claim_date
// //                 ? new Date(claim.claim_date).toLocaleDateString()
// //                 : "N/A"}
// //             </p>
// //           </div>
// //         ))
// //       ) : (
// //         <p>No claims found</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default AllClaims;


// // src/pages/AllClaims.jsx
// import React, { useState, useEffect } from 'react';
// import api from '../api/api';

// const AllClaims = () => {
//   const [claims, setClaims] = useState([]);

//   useEffect(() => {
//     const fetchClaims = async () => {
//       try {
//         const res = await api.get('/claims');
//         setClaims(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchClaims();
//   }, []);

//   return (
//     <div className="container">
//       <h2>All Claims</h2>
//       {claims.length > 0 ? (
//         claims.map(claim => (
//           <div key={claim._id} className="card">
//             <p>
//               Policy ID:{" "}
//               {claim.policy_id 
//                 ? (claim.policy_id._id || claim.policy_id) 
//                 : 'N/A'}
//             </p>
//             <p>Claim Amount: ${claim.claim_amount}</p>
//             <p>Status: {claim.status}</p>
//             <p>Description: {claim.description}</p>
//             <p>
//               Date:{" "}
//               {claim.claim_date
//                 ? new Date(claim.claim_date).toLocaleDateString()
//                 : "N/A"}
//             </p>
//           </div>
//         ))
//       ) : (
//         <p>No claims found</p>
//       )}
//     </div>
//   );
// };

// export default AllClaims;



import React, { useState, useEffect } from 'react';
import api from '../api/api';

const AllClaims = () => {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        // Call the new endpoint that returns claims for the logged-in user
        const res = await api.get('/claims/my');
        setClaims(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchClaims();
  }, []);

  return (
    <div className="container">
      <h2>All Claims</h2>
      {claims.length > 0 ? (
        claims.map(claim => (
          <div key={claim._id} className="card">
            <p>
              Policy ID:{" "}
              {claim.policy_id
                ? (claim.policy_id._id || claim.policy_id)
                : 'N/A'}
            </p>
            <p>Claim Amount: ${claim.claim_amount}</p>
            <p>Status: {claim.status}</p>
            <p>Description: {claim.description}</p>
            <p>
              Date:{" "}
              {claim.claim_date
                ? new Date(claim.claim_date).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
        ))
      ) : (
        <p>No claims found</p>
      )}
    </div>
  );
};

export default AllClaims;
