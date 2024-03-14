import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Gallery from './pages/galeri/galeri';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/galery" element={<Gallery/>}/>
      </Routes>
    </Router>
  );
}

export default App;
