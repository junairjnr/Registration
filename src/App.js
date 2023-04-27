import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Header from './components/Header';

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header/>
      <Routes>
        <Route path='/*' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
