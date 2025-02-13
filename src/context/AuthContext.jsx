// // // // import React, { createContext, useContext, useState, useEffect } from 'react';
// // // // import api from '../api/api';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const AuthContext = createContext();

// // // // export const AuthProvider = ({ children }) => {
// // // //     const navigate = useNavigate();
// // // //   const [user, setUser] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   // Check authentication status on mount
// // // //   useEffect(() => {
// // // //     const checkAuth = async () => {
// // // //       const token = localStorage.getItem('token');
// // // //       if (token) {
// // // //         try {
// // // //           // Ensure your backend has a route to verify token and return user details
// // // //           const res = await api.get('/auth/');
// // // //           setUser(res.data.user);
// // // //         } catch (error) {
// // // //           localStorage.removeItem('token');
// // // //         }
// // // //       }
// // // //       setLoading(false);
// // // //     };
// // // //     checkAuth();
// // // //   }, []);

// // // //   const login = async (credentials) => {
// // // //     // credentials: { email, password, role }
// // // //     const res = await api.post('/auth/login', credentials);
// // // //     localStorage.setItem('token', res.data.token);
// // // //     setUser(res.data.user);
// // // //     // Redirect based on role
// // // //     if (res.data.user.role === 'admin') {
// // // //       navigate('/admin/claims');
// // // //     } else {
// // // //       navigate('/profile');
// // // //     }
// // // //   };

// // // //   const signup = async (userData) => {
// // // //     // userData: { name, email, password, contact_info, date_of_birth }
// // // //     await api.post('/policyholders', userData);
// // // //     navigate('/login');
// // // //   };

// // // //   const logout = () => {
// // // //     localStorage.removeItem('token');
// // // //     setUser(null);
// // // //     navigate('/login');
// // // //   };

// // // //   return (
// // // //     <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
// // // //       {children}
// // // //     </AuthContext.Provider>
// // // //   );
// // // // };

// // // // export const useAuth = () => useContext(AuthContext);
// // // import React, { createContext, useContext, useState, useEffect } from 'react';
// // // import api from '../api/api';
// // // import { useNavigate } from 'react-router-dom';
// // // // import  jwt_decode  from 'jwt-decode';
// // // import { default as jwt_decode } from 'jwt-decode';


// // // const AuthContext = createContext();

// // // export const AuthProvider = ({ children }) => {
// // //   const [user, setUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const navigate = useNavigate();

// // //   // Check authentication status on mount
// // //   useEffect(() => {
// // //     const checkAuth = () => {
// // //       const token = localStorage.getItem('token');
// // //       if (token) {
// // //         try {
// // //           // Decode token to get user details
// // //           const decoded = jwt_decode(token);
// // //           setUser({ 
// // //             id: decoded.id, 
// // //             email: decoded.email, 
// // //             role: decoded.role, 
// // //             name: decoded.name || '' 
// // //           });
// // //         } catch (error) {
// // //           localStorage.removeItem('token');
// // //         }
// // //       }
// // //       setLoading(false);
// // //     };
// // //     checkAuth();
// // //   }, []);

// // //   const login = async (credentials) => {
// // //     // credentials: { email, password, role }
// // //     try {
// // //       const res = await api.post('/auth/login', credentials);
// // //       // Save the token
// // //       localStorage.setItem('token', res.data.token);
// // //       // Decode the token to extract user details
// // //       const decoded = jwt_decode(res.data.token);
// // //       setUser({ 
// // //         id: decoded.id, 
// // //         email: decoded.email, 
// // //         role: decoded.role, 
// // //         name: decoded.name || '' 
// // //       });
// // //       // Redirect based on role
// // //       if (decoded.role === 'admin') {
// // //         navigate('/admin/claims');
// // //       } else {
// // //         navigate('/profile');
// // //       }
// // //     } catch (err) {
// // //       alert('Login failed');
// // //       console.error(err);
// // //     }
// // //   };

// // //   const signup = async (userData) => {
// // //     // userData: { name, email, password, contact_info, date_of_birth }
// // //     try {
// // //       await api.post('/policyholders', userData);
// // //       navigate('/login');
// // //     } catch (err) {
// // //       alert('Signup failed');
// // //       console.error(err);
// // //     }
// // //   };

// // //   const logout = () => {
// // //     localStorage.removeItem('token');
// // //     setUser(null);
// // //     navigate('/login');
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
// // //       {children}
// // //     </AuthContext.Provider>
// // //   );
// // // };

// // // export const useAuth = () => useContext(AuthContext);


// // import React, { createContext, useContext, useState, useEffect } from 'react';
// // import api from '../api/api';
// // import { useNavigate } from 'react-router-dom';
// // // import jwt_decode  from 'jwt-decode';
// // import { jwtDecode } from 'jwt-decode';

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const navigate = useNavigate();

// //   // Check authentication status on mount
// //   useEffect(() => {
// //     const checkAuth = () => {
// //       const token = localStorage.getItem('token');
// //       if (token) {
// //         try {
// //           // Decode token to get user details
// //           const decoded = jwtDecode(token);
// //           setUser({ 
// //             id: decoded.id, 
// //             email: decoded.email, 
// //             role: decoded.role, 
// //             name: decoded.name || '' 
// //           });
// //         } catch (error) {
// //           localStorage.removeItem('token');
// //         }
// //       }
// //       setLoading(false);
// //     };
// //     checkAuth();
// //   }, []);

// //   const login = async (credentials) => {
// //     // credentials: { email, password, role }
// //     try {
// //       const res = await api.post('/auth/login', credentials);
// //       console.log('Login token:', res.data.token);
// //       // Save the token
// //       localStorage.setItem('token', res.data.token);
// //       // Decode the token to extract user details
// //       const decoded = jwtDecode(res.data.token);
// //       setUser({ 
// //         id: decoded.id, 
// //         email: decoded.email, 
// //         role: decoded.role, 
// //         name: decoded.name || '' 
// //       });
// //       // Redirect based on role
// //       if (decoded.role === 'admin') {
// //         navigate('/admin/claims');
// //       } else {
// //         navigate('/profile');
// //       }
// //     } catch (err) {
// //       alert('Login failed');
// //       console.error(err);
// //     }
// //   };

// //   const signup = async (userData) => {
// //     // userData: { name, email, password, contact_info, date_of_birth }
// //     try {
// //       await api.post('/policyholders', userData);
// //       navigate('/login');
// //     } catch (err) {
// //       alert('Signup failed');
// //       console.error(err);
// //     }
// //   };

// //   const logout = () => {
// //     localStorage.removeItem('token');
// //     setUser(null);
// //     navigate('/login');
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import api from '../api/api';
// import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode'; // Adjust import if needed

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkAuth = () => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         try {
//           const decoded = jwtDecode(token);
//           setUser({ 
//             id: decoded.id, 
//             email: decoded.email, 
//             role: decoded.role, 
//             name: decoded.name || '' 
//           });
//         } catch (error) {
//           localStorage.removeItem('token');
//         }
//       }
//       setLoading(false);
//     };
//     checkAuth();
//   }, []);

//   const login = async (credentials) => {
//     try {
//       const res = await api.post('/auth/login', credentials);
//       localStorage.setItem('token', res.data.token);
//       const decoded = jwtDecode(res.data.token);
//       setUser({ 
//         id: decoded.id, 
//         email: decoded.email, 
//         role: decoded.role, 
//         name: decoded.name || '' 
//       });
//       // Redirect based on role
//       if (decoded.role === 'admin') {
//         navigate('/admin/claims'); // Admin-specific page
//       } else {
//         navigate('/profile');
//       }
//     } catch (err) {
//       alert('Login failed');
//       console.error(err);
//     }
//   };

//   const signup = async (userData) => {
//     try {
//       await api.post('/policyholders', userData);
//       navigate('/login');
//     } catch (err) {
//       alert('Signup failed');
//       console.error(err);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     navigate('/login');
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          setUser({ 
            id: decoded.id, 
            email: decoded.email, 
            role: decoded.role, 
            name: decoded.name || '' 
          });
        } catch (error) {
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const res = await api.post('/auth/login', credentials);
      localStorage.setItem('token', res.data.token);
      const decoded = jwtDecode(res.data.token);
      setUser({ 
        id: decoded.id, 
        email: decoded.email, 
        role: decoded.role, 
        name: decoded.name || '' 
      });
      // Redirect based on role
      if (decoded.role === 'admin') {
        navigate('/admin/claims');
      } else {
        navigate('/profile');
      }
    } catch (err) {
      alert('Login failed');
      console.error(err);
    }
  };

  const signup = async (userData) => {
    try {
      await api.post('/policyholders', userData);
      navigate('/login');
    } catch (err) {
      alert('Signup failed');
      console.error(err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
