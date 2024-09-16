import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sobre' element={<AboutUs />} />
        <Route path="/contato" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
