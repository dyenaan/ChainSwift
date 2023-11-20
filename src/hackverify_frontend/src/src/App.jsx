import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { Container } from '@mui/material';
import Login from './components/login';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Card from './components/Card';
import Form from "./components/Form"
import AppBar from './AppBar';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem("isAuthenticated") === "true"
  );

  const handleAuthentication = (authStatus) => {
    setIsAuthenticated(authStatus);
    window.localStorage.setItem("isAuthenticated", String(authStatus));
    console.log('Authentication status set:', authStatus);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);

  };

  return (
    <Router>
      <AppBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Container>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/home" element={<LandingPage />} />
              <Route path="/card" element={<Card />} />
              <Route path="/form" element={<Form />} />
              <Route path="/landingpage" element={<LandingPage />} />
            </>
          ) : (
            <Route path="/login" element={<Login onAuthenticate={handleAuthentication} />} />
          )}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;