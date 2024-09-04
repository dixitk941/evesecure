import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { keyframes } from '@emotion/react';

const fillUnfill = keyframes`
  0% { background-color: transparent; }
  50% { background-color: #ff0000; }
  100% { background-color: transparent; }
`;

const Hero = () => {
  const [clicked, setClicked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error obtaining location', error);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    }
  }, [location]);

  const handleClick = () => {
    setClicked(true);
    if (location) {
      console.log('User location:', location);
    }

    setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 15000);
    }, 1000); // Adjust timing to match the animation duration
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
        {showMessage && (
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
            Help on the way
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Hero;