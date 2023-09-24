

import Navbar from '../src/components/Navbar/Navbar';
import './App.css';
import Home from './Pages/Home/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;

