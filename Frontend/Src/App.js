import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/signin" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Sign Up</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
    textAlign: 'center',
  },
  link: {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default App;