import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { keyframes } from '@emotion/react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBCdGoLROIFmSxm2paKBPABzch0G1n7i-c",
  authDomain: "eve-f0dbd.firebaseapp.com",
  projectId: "eve-f0dbd",
  storageBucket: "eve-f0dbd.appspot.com",
  messagingSenderId: "14829769908",
  appId: "1:14829769908:web:12be767cf593acb701b3e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fillUnfill = keyframes`
  0% { background-color: transparent; }
  50% { background-color: #ff0000; }
  100% { background-color: transparent; }
`;

const Hero = () => {
  const [clicked, setClicked] = useState(false);
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState(null);

  const handleClick = async () => {
    setClicked(true);
    setMessage('Capturing location...');

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setMessage('Forwarding location to police and emergency contacts...');
        
        try {
          // Add user's location to Firestore
          await addDoc(collection(db, 'sos_requests'), {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            timestamp: new Date(),
          });
          console.log('Location saved:', location);

          // After successfully saving the location
          setTimeout(() => {
            setMessage('Help on the way');
          }, 2000); // Delay for showing "Forwarding location..." message
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      },
      (error) => {
        console.error('Error obtaining location', error);
        setMessage('Failed to capture location');
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
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
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Emergency SOS
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Immediate assistance at your fingertips. Stay safe with EveSecure.
        </Typography>
        <Box
          sx={{
            marginTop: '20px',
            borderRadius: '50%',
            width: '120px',
            height: '120px',
            border: '5px solid #ff0000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: clicked ? 'none' : `${fillUnfill} 1s infinite`,
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
            margin: '0 auto',
          }}
          onClick={handleClick}
        >
          <Button
            variant="contained"
            color="error"
            size="large"
            startIcon={<HelpIcon />}
            sx={{
              borderRadius: '50%',
              width: '100px',
              height: '100px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            SOS
          </Button>
        </Box>
        {message && (
          <Typography
            variant="h4"
            component="p"
            sx={{
              marginTop: '20px',
              backgroundColor: '#ff0000',
              color: '#ffffff',
              padding: '10px 20px',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            {message}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Hero;
