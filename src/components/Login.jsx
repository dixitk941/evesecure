import React, { useEffect } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { auth, provider, db } from './firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/'); // Navigate to home if already logged in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Fetch user details
      const userDetails = {
        fullName: user.displayName,
        email: user.email,
        profilePic: user.photoURL,
        uid: user.uid,
        // Add more fields as needed
      };

      // Store user details in Firestore
      await setDoc(doc(db, 'users', user.uid), userDetails);

      console.log('User signed in and details stored:', userDetails);
      navigate('/'); // Navigate to home after successful login
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#1c1c1c',
        color: '#ffffff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Sign in to access the SOS features
        </Typography>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={handleLogin}
          sx={{
            marginTop: '20px',
            backgroundColor: '#ff0000',
            color: '#ffffff',
            padding: '10px 20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          Sign in with Google
        </Button>
      </Container>
    </Box>
  );
};

export default Login;