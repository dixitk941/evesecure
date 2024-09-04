import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { auth, db } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

const Header = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setProfilePic(userDoc.data().profilePic);
        }
      } else {
        setUser(null);
        setProfilePic('');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
        {user ? (
          <>
            <IconButton onClick={handleMenuOpen} style={{ marginLeft: '10px' }}>
              <Avatar alt={user.displayName} src={profilePic} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem component={Link} to="/settings" onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={() => { auth.signOut(); handleMenuClose(); }}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login" style={{ color: '#ffffff' }}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;