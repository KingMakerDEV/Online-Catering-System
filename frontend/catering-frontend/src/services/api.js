// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:8080',  // ✅ FIXED: Removed extra /api
//   withCredentials: true,
// });

// // ✅ TOKEN INTERCEPTOR (YOUR CODE - PERFECT)
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     console.log('📡 API CALL:', config.method, config.url); // ✅ DEBUG
//     return config;
//   },
//   (error) => Promise.reject(error)
// );


// // ✅ 401 HANDLER (YOUR CODE - PERFECT)
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       console.error('🚨 401 - Clearing token'); // ✅ DEBUG
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//       window.location.href = '/login';
//     }
//     console.error('❌ API ERROR:', error.response?.status, error.message); // ✅ DEBUG
//     return Promise.reject(error);
//   }
// );

// export const login = (credentials) =>
//   api.post('/api/auth/login', credentials).then((response) => {
//     localStorage.setItem('token', response.data.token);
//     localStorage.setItem('user', JSON.stringify(response.data.user)); // ✅ ADDED
//     return response.data;
//   });

// // ✅ FIXED: ADMIN LOGIN NOW STORES TOKEN
// export const adminLogin = (credentials) => 
//   api.post('/api/auth/admin/login', credentials).then((res) => {
//     localStorage.setItem('token', res.data.token); // ✅ STORES TOKEN
//     localStorage.setItem('user', JSON.stringify(res.data.user)); // ✅ STORES USER
//     console.log('✅ TOKEN STORED:', res.data.token.substring(0, 20) + '...'); // ✅ DEBUG
//     return res.data;
//   });

// export const register = (user) => api.post('/api/auth/register', user).then((response) => response.data);

// export const getCurrentUser = () => api.get('/api/auth/me').then((response) => response.data);

// // export const getMenus = () => api.get('/api/menu').then((response) => response.data);

// export const getMenus = () => api.get('/api/menu').then((res) => res.data);

// export const placeOrder = (orderItems) =>
//   api.post('/api/orders', orderItems).then((res) => res.data); 


// // export const placeOrder = (orderItems) => api.post('/api/orders', orderItems).then((response) => response.data);

// export const getOrders = () => api.get('/api/orders').then((response) => response.data);

// // ✅ FIXED: In createMenuItem function, add:
// export const createMenuItem = (formData) =>
//   api.post('/api/menu', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   }).then((response) => response.data);

import axios from 'axios';

const api = axios.create({
<<<<<<< HEAD
  baseURL: 'http://localhost:8080',  // ✅ FIXED: Removed extra /api
=======
  baseURL: 'http://localhost:8080',
>>>>>>> e6c77546a8a2841b5a7cef786f5536e39451d81a
  withCredentials: true,
});

// ✅ TOKEN INTERCEPTOR
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('📡 API CALL:', config.method, config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ 401 HANDLER
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('🚨 401 - Clearing token');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    console.error('❌ API ERROR:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// ------------------- AUTH -------------------
export const login = (credentials) =>
  api.post('/api/auth/login', credentials).then((res) => {
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    return res.data;
  });

export const adminLogin = (credentials) =>
  api.post('/api/auth/admin/login', credentials).then((res) => {
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    console.log('✅ TOKEN STORED:', res.data.token.substring(0, 20) + '...');
    return res.data;
  });

export const register = (user) =>
  api.post('/api/auth/register', user).then((res) => res.data);

export const getCurrentUser = () =>
  api.get('/api/auth/me').then((res) => res.data);

// ------------------- MENU -------------------
export const getMenus = () =>
  api.get('/api/menu').then((res) => res.data);

export const createMenuItem = (formData) =>
  api.post('/api/menu', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }).then((res) => res.data);

// ------------------- ORDERS -------------------
export const placeOrder = (orderItems) =>
  api.post('/api/orders', orderItems).then((res) => res.data);

export const getOrders = () =>
  api.get('/api/orders').then((res) => res.data);
