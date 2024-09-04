import React from 'react';
import { Box, Button, TextField, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ContactPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: isSmallScreen ? '20px' : '40px',
        backgroundColor: '#000000',
        color: '#ffffff',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box
        component="form"
        action="https://api.web3forms.com/submit"
        method="POST"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: isSmallScreen ? '100%' : '50%',
          backgroundColor: '#333333',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(255, 255, 255, 0.1)',
        }}
      >
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          required
          InputLabelProps={{ style: { color: '#ffffff' } }}
          InputProps={{
            style: { color: '#ffffff' },
            sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
            },
          }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          required
          InputLabelProps={{ style: { color: '#ffffff' } }}
          InputProps={{
            style: { color: '#ffffff' },
            sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
            },
          }}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          InputLabelProps={{ style: { color: '#ffffff' } }}
          InputProps={{
            style: { color: '#ffffff' },
            sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff',
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: '10px 20px',
            borderRadius: '50px',
            boxShadow: '0px 8px 15px rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#cccccc',
              boxShadow: '0px 15px 20px rgba(255, 255, 255, 0.4)',
            },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default ContactPage;