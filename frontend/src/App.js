import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <PrivateRoute path='/user-dashboard' element={<UserDashboard />} />
        <PrivateRoute path='/admin-dashboard' element={<AdminDashboard />} admin={true} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
