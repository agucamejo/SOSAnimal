import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/HomePage';
import About from './pages/about/AboutPage';
import Contact from './pages/contact/ContactPage';
import Error from './pages/error/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
