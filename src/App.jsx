import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Packages from './components/Packages';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    {/* Navbar stay outside so it's visible on all pages */}
      <Navbar />
      
      {/* Routes holds all pages definition */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;