import React from 'react';
import { Button, Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SupportIcon from '@mui/icons-material/Support';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PhoneIcon from '@mui/icons-material/Phone';
import PermissionsRequest from './PermissionsRequest'; // Import the PermissionsRequest component


const MainLayout = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <div className="relative min-h-screen">
            <PermissionsRequest /> {/* Include the PermissionsRequest component */}

      <Outlet /> {/* This will render the current route's component */}

      {/* Floating Icons */}
      <Box
        sx={{
          position: 'fixed',
          bottom: isSmallScreen ? '10px' : '20px',
          right: isSmallScreen ? '10px' : '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: isSmallScreen ? '10px' : '20px',
          zIndex: 1000,
        }}
      >
        <Button
          variant="contained"
          startIcon={<LocalHospitalIcon />}
          onClick={() => window.location.href = 'tel:102'}
          sx={{
            backgroundColor: '#5b86e5',
            backgroundImage: 'linear-gradient(315deg, #5b86e5 0%, #36d1dc 74%)',
            color: '#fff',
            borderRadius: '50px',
            padding: isSmallScreen ? '8px 16px' : '10px 20px',
            fontSize: isSmallScreen ? '12px' : '16px',
            boxShadow: '0px 8px 15px rgba(91, 134, 229, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0px 15px 20px rgba(91, 134, 229, 0.4)',
            },
          }}
        >
          Call Ambulance
        </Button>

        <Button
          variant="contained"
          startIcon={<PhoneIcon />}
          onClick={() => window.location.href = 'tel:181'}
          sx={{
            backgroundColor: '#ff4b2b',
            backgroundImage: 'linear-gradient(315deg, #ff4b2b 0%, #ff416c 74%)',
            color: '#fff',
            borderRadius: '50px',
            padding: isSmallScreen ? '8px 16px' : '10px 20px',
            fontSize: isSmallScreen ? '12px' : '16px',
            boxShadow: '0px 8px 15px rgba(255, 75, 43, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0px 15px 20px rgba(255, 75, 43, 0.4)',
            },
          }}
        >
          Women Helpline
        </Button>

        <Button
          variant="contained"
          startIcon={<SupportIcon />}
          onClick={() => window.location.href = 'tel:100'}
          sx={{
            backgroundColor: '#34ebba',
            backgroundImage: 'linear-gradient(315deg, #34ebba 0%, #00c6ff 74%)',
            color: '#fff',
            borderRadius: '50px',
            padding: isSmallScreen ? '8px 16px' : '10px 20px',
            fontSize: isSmallScreen ? '12px' : '16px',
            boxShadow: '0px 8px 15px rgba(52, 235, 186, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0px 15px 20px rgba(52, 235, 186, 0.4)',
            },
          }}
        >
          Police Helpline
        </Button>
      </Box>
    </div>
  );
};

export default MainLayout;