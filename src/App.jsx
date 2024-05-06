import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/HomePage';
import About from './pages/about/AboutPage';
import Adoptions from './pages/adoptions/AdoptionPage';
import Colaborations from './pages/colaborations/ColabPage';
import Contact from './pages/contact/ContactPage';
import Error from './pages/error/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adoptions" element={<Adoptions />} />
        <Route path="/colaborations" element={<Colaborations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
