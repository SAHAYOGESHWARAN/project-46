import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <PrivateRoute path='/user-dashboard' element={<UserDashboard />} />
        <PrivateRoute path='/admin-dashboard' element={<AdminDashboard />} admin={true} />
      </Routes>
    </Router>
  );
}

export default App;
