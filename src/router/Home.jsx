import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landing from '../screens/Landing';

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/services" element={<Landing />} />
        
      </Routes>
    </Router>
  );
}

export default Home;
