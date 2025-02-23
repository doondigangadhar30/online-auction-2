import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Online Auction Platform</h1>
      <img
        src="/Bidme.png" 
        alt="Auction Platform"
        style={styles.image}
      />
      <div style={styles.links}>
        <Link to="/signin" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Sign Up</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
  },
  image: {
    width: '300px', 
    height: '300px', 
    borderRadius: '50%', 
    objectFit: 'cover', 
    marginTop: '20px',
  },
  links: {
    marginTop: '20px',
  },
  link: {
    margin: '0 10px',
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '20px',
  },
};

export default LandingPage;