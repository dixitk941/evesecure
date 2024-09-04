import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '20px 0',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Neocodenex. All rights reserved.{' '}
        <Link href="https://neocodenex.tech" color="inherit" underline="hover">
          neocodenex.tech
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;