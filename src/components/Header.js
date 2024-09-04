import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1c1c1c' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ flexGrow: 1, color: '#ffffff', textDecoration: 'none' }}
        >
          EveSecure
        </Typography>
        <Button color="inherit" component={Link} to="/features" style={{ color: '#ffffff' }}>Features</Button>
        <Button color="inherit" component={Link} to="/contact" style={{ color: '#ffffff' }}>Contact</Button>
        <IconButton component={Link} to="/sos" style={{ marginLeft: 'auto', color: '#ff0000' }}>
          <HelpIcon />
          <Typography variant="button" style={{ marginLeft: 4, color: '#ff0000' }}>SOS</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;