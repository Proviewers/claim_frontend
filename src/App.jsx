// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // import { AuthProvider, useAuth } from './context/AuthContext';
// // import Navbar from './components/Navbar';
// // import Login from './pages/Login';
// // import Signup from './pages/Signup';
// // import Profile from './pages/Profile';
// // import AllPolicies from './pages/AllPolicies';
// // import PaymentPage from './pages/PaymentPage';
// // import MyPolicies from './pages/MyPolicies';
// // import PolicyDetails from './pages/PolicyDetails';
// // import AllClaims from './pages/AllClaims';
// // import AllPayments from './pages/AllPayments';
// // import AdminClaims from './pages/AdminClaims';

// // const AppRoutes = () => {
// //   const { user, loading } = useAuth();
// //   if (loading) return <p>Loading...</p>;
  
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Navigate to={user ? '/profile' : '/login'} replace />} />
// //       <Route path="/login" element={!user ? <Login /> : <Navigate to="/profile" replace />} />
// //       <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/profile" replace />} />
// //       <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" replace />} />
// //       <Route path="/all-policies" element={user ? <AllPolicies /> : <Navigate to="/login" replace />} />
// //       <Route path="/payment" element={user ? <PaymentPage /> : <Navigate to="/login" replace />} />
// //       <Route path="/my-policies" element={user ? <MyPolicies /> : <Navigate to="/login" replace />} />
// //       <Route path="/policy/:id" element={user ? <PolicyDetails /> : <Navigate to="/login" replace />} />
// //       <Route path="/all-claims" element={user ? <AllClaims /> : <Navigate to="/login" replace />} />
// //       <Route path="/all-payments" element={user ? <AllPayments /> : <Navigate to="/login" replace />} />
// //       <Route path="/admin/claims" element={user && user.role === 'admin' ? <AdminClaims /> : <Navigate to="/profile" replace />} />
// //     </Routes>
// //   );
// // };

// // const App = () => (
// //   <AuthProvider>
// //     {/* <Router> */}
// //       <Navbar />
// //       <AppRoutes />
// //     {/* </Router> */}
// //   </AuthProvider>
// // );

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import Navbar from './components/Navbar';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Profile from './pages/Profile';
// import AllPolicies from './pages/AllPolicies';
// import PaymentPage from './pages/PaymentPage';
// import MyPolicies from './pages/MyPolicies';
// import PolicyDetails from './pages/PolicyDetails';
// import AllClaims from './pages/AllClaims';
// import AllPayments from './pages/AllPayments';
// import AdminClaims from './pages/AdminClaims';

// const AppRoutes = () => {
//   const { user, loading } = useAuth();
//   if (loading) return <p>Loading...</p>;

//   return (
//     <Routes>
//       {/* If not logged in, always show login */}
//       <Route path="/" element={<Navigate to={user ? (user.role === 'admin' ? '/admin/claims' : '/profile') : '/login'} replace />} />
//       <Route path="/login" element={!user ? <Login /> : <Navigate to={user.role === 'admin' ? '/admin/claims' : '/profile'} replace />} />
//       <Route path="/signup" element={!user ? <Signup /> : <Navigate to={user.role === 'admin' ? '/admin/claims' : '/profile'} replace />} />

//       {/* User-specific routes: if user is admin, redirect to admin */}
//       <Route path="/profile" element={user && user.role !== 'admin' ? <Profile /> : <Navigate to="/admin/claims" replace />} />
//       <Route path="/all-policies" element={user && user.role !== 'admin' ? <AllPolicies /> : <Navigate to="/admin/claims" replace />} />
//       <Route path="/payment" element={user && user.role !== 'admin' ? <PaymentPage /> : <Navigate to="/admin/claims" replace />} />
//       <Route path="/my-policies" element={user && user.role !== 'admin' ? <MyPolicies /> : <Navigate to="/admin/claims" replace />} />
//       <Route path="/policy/:id" element={user && user.role !== 'admin' ? <PolicyDetails /> : <Navigate to="/admin/claims" replace />} />
//       <Route path="/all-claims" element={user && user.role !== 'admin' ? <AllClaims /> : <Navigate to="/admin/claims" replace />} />
//       <Route path="/all-payments" element={user && user.role !== 'admin' ? <AllPayments /> : <Navigate to="/admin/claims" replace />} />

//       {/* Admin-specific route */}
//       <Route path="/admin/claims" element={user && user.role === 'admin' ? <AdminClaims /> : <Navigate to="/login" replace />} />
      
//       {/* Catch-all */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// };

// const App = () => (
//   <AuthProvider>
//     <Router>
//       <Navbar />
//       <AppRoutes />
//     </Router>
//   </AuthProvider>
// );

// export default App;


import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import AllPolicies from './pages/AllPolicies';
import PaymentPage from './pages/PaymentPage';
import MyPolicies from './pages/MyPolicies';
import PolicyDetails from './pages/PolicyDetails';
import AllClaims from './pages/AllClaims';
import AllPayments from './pages/AllPayments';
import AdminClaims from './pages/AdminClaims';

const AppRoutes = () => {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;

  return (
    <Routes>
      {/* If not logged in, redirect to login */}
      <Route
        path="/"
        element={
          <Navigate
            to={
              user
                ? (user.role === 'admin' ? '/admin/claims' : '/profile')
                : '/login'
            }
            replace
          />
        }
      />
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to={user.role === 'admin' ? '/admin/claims' : '/profile'} replace />}
      />
      <Route
        path="/signup"
        element={!user ? <Signup /> : <Navigate to={user.role === 'admin' ? '/admin/claims' : '/profile'} replace />}
      />

      {/* User-specific routes */}
      <Route
        path="/profile"
        element={user && user.role !== 'admin' ? <Profile /> : <Navigate to="/admin/claims" replace />}
      />
      <Route
        path="/all-policies"
        element={user && user.role !== 'admin' ? <AllPolicies /> : <Navigate to="/admin/claims" replace />}
      />
      <Route
        path="/payment"
        element={user && user.role !== 'admin' ? <PaymentPage /> : <Navigate to="/admin/claims" replace />}
      />
      <Route
        path="/my-policies"
        element={user && user.role !== 'admin' ? <MyPolicies /> : <Navigate to="/admin/claims" replace />}
      />
      <Route
        path="/policy/:id"
        element={user && user.role !== 'admin' ? <PolicyDetails /> : <Navigate to="/admin/claims" replace />}
      />
      <Route
        path="/all-claims"
        element={user && user.role !== 'admin' ? <AllClaims /> : <Navigate to="/admin/claims" replace />}
      />
      <Route
        path="/all-payments"
        element={user && user.role !== 'admin' ? <AllPayments /> : <Navigate to="/admin/claims" replace />}
      />

      {/* Admin-specific route */}
      <Route
        path="/admin/claims"
        element={user && user.role === 'admin' ? <AdminClaims /> : <Navigate to="/login" replace />}
      />

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App = () => (
  <AuthProvider>
    {/* Remove the extra <Router> here if your entry point already wraps App with a Router */}
    <Navbar />
    <AppRoutes />
  </AuthProvider>
);

export default App;
