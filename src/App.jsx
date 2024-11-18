import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
// import Card from './components/Card';

function App() {
  return (
    <div className="">
    {/* <Card /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App