import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AppBarComponent = ({ isAuthenticated, handleLogout }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        ChainSwift
      </Typography>
      {isAuthenticated && (
        <>
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/card">
            Card
          </Button>
          <Button color="inherit" component={Link} to="/landingpage">
            Landing Page
          </Button>
        </>
      )}
      {isAuthenticated ? (
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      )}
    </Toolbar>
  </AppBar>
);

export default AppBarComponent;