import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Navbar />
      <Routes>
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
