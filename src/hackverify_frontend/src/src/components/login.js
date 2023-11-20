import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";

const Login = ({ onAuthenticate }) => {
  const [authClient, setAuthClient] = useState(null);
  const [identity, setIdentity] = useState(null);

  useEffect(() => {
    const initAuthClient = async () => {
      const authClient = await AuthClient.create();
      setAuthClient(authClient);
      if (await authClient.isAuthenticated()) {
        handleAuthenticated(authClient);
      }
    };

    initAuthClient();
  }, []);

  const authenticate = async () => {
    try {
      await new Promise((resolve, reject) => {
        authClient.login({
          identityProvider: "https://identity.ic0.app",
          onSuccess: resolve,
          onError: reject,
        });
      });
      handleAuthenticated(authClient);
    } catch (error) {
      console.error("Authentication error:", error);
      // You might want to show an error message to the user here
    }
  };

  async function handleAuthenticated(authClient) {
    const identity = await authClient.getIdentity();
  
    // Specify the correct host for your environment (e.g., local development or the Internet Computer network)
    const host = "https://identity.ic0.app";  // Replace with the appropriate host
  
    const agent = new HttpAgent({ identity, host });
    setIdentity(identity);
    onAuthenticate(true);
  }
  

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="background"
    >
      <Grid item xs={10} sm={8} md={6} lg={4} className="container">
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: { xs: 2, sm: 4 },
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            color: "white",
            fontFamily: "Raleway",
            fontWeight: "bold",
            textShadow: "4px 4px 4=8px #000000",
          }}
        >
          Login with Internet Identity
        </Typography>
  
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={authenticate}
          className="button"
        >
          Sign In
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
