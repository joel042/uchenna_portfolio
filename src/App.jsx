import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from "./pages/Portfolio";
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Contact from './pages/Contact';
// import Card from './components/Card';

function App() {
  return (
    <div className=" w-full mx-auto container">
      {/* <Card /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App