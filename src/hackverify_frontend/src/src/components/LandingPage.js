import React from 'react';
import Home from './Home';
import { Link, NavLink,Navigate } from 'react-router-dom';
import Form from './Form';

const LandingPage = () => {

  const handleClick = () => {
    // Your custom logic or action when the link is clicked
    console.log('Link clicked!');

    // Navigate to the "/form" route
    Navigate('/form');
  };




  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to Our Hackathon Project</h1>
        <p style={styles.subtitle}>We are creating a verification platform where students can have a digital identity!</p>
      </header>

      <section style={styles.features}>
        <div style={styles.feature}>
          <h2 style={styles.featureTitle}>Feature 1</h2>
          <p>We are building a verification Identity where students .</p>
        </div>
        <div style={styles.feature}>
          <h2 style={styles.featureTitle}>Feature 2</h2>
          <p>A digital identity where students can save their students records</p>
        </div>
        <div style={styles.feature}>
          <h2 style={styles.featureTitle}>Feature 3</h2>
          <p>A unique Identity where students can easily share their records with potential employees!</p>
        </div>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>Please fill out your details : <Link to={Form} style={{ color: '#0066cc' }}>Click here</Link></p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    minWidth: "100%",
    width: "100%",
    //maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2em',
    color: '#0066cc',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#0099ff',
  },
  features: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '40px',
  },
  feature: {
    flex: '1',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  featureTitle: {
    color: '#0099ff',
  },
  footer: {
    marginTop: '40px',
    textAlign: 'center',
    color: '#888',
  },
  footerText: {
    color: '#0066cc',
  },


};

export default LandingPage;
