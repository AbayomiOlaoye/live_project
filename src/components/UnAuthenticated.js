import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';

const UnAuthenticatedRoute = () => (
  <Routes>
    <Route path="/" index element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Register />} />
  </Routes>
);

export default UnAuthenticatedRoute;