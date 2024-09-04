import React from 'react';
import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import NightlightIcon from '@mui/icons-material/Nightlight';
import HelpIcon from '@mui/icons-material/Help';

const Features = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        color: '#ffffff',
        minHeight: '100vh',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Features
        </Typography>
        <List>
          <ListItem>
            <Card
              sx={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                marginBottom: '20px',
                '&:hover': {
                  backgroundColor: '#333333',
                },
              }}
            >
              <CardContent>
                <ListItemIcon>
                  <MicIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Voice Activation of SOS"
                  secondary="Activate the SOS feature using voice commands for quick and hands-free emergency assistance."
                  primaryTypographyProps={{ color: '#ffffff' }}
                  secondaryTypographyProps={{ color: '#cccccc' }} // Light gray for secondary text
                />
              </CardContent>
            </Card>
          </ListItem>
          <ListItem>
            <Card
              sx={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                marginBottom: '20px',
                '&:hover': {
                  backgroundColor: '#333333',
                },
              }}
            >
              <CardContent>
                <ListItemIcon>
                  <LocationOnIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Live Location Sending"
                  secondary="Send your live location to parents and the nearest police station for immediate help."
                  primaryTypographyProps={{ color: '#ffffff' }}
                  secondaryTypographyProps={{ color: '#cccccc' }} // Light gray for secondary text
                />
              </CardContent>
            </Card>
          </ListItem>
          <ListItem>
            <Card
              sx={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                marginBottom: '20px',
                '&:hover': {
                  backgroundColor: '#333333',
                },
              }}
            >
              <CardContent>
                <ListItemIcon>
                  <NotificationsIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Help Notifications"
                  secondary="Notify the nearest persons with your location for quick assistance."
                  primaryTypographyProps={{ color: '#ffffff' }}
                  secondaryTypographyProps={{ color: '#cccccc' }} // Light gray for secondary text
                />
              </CardContent>
            </Card>
          </ListItem>
          <ListItem>
            <Card
              sx={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                marginBottom: '20px',
                '&:hover': {
                  backgroundColor: '#333333',
                },
              }}
            >
              <CardContent>
                <ListItemIcon>
                  <SecurityIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Parental Control"
                  secondary="Allow parents to monitor and control the safety features for their children."
                  primaryTypographyProps={{ color: '#ffffff' }}
                  secondaryTypographyProps={{ color: '#cccccc' }} // Light gray for secondary text
                />
              </CardContent>
            </Card>
          </ListItem>
          <ListItem>
            <Card
              sx={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                marginBottom: '20px',
                '&:hover': {
                  backgroundColor: '#333333',
                },
              }}
            >
              <CardContent>
                <ListItemIcon>
                  <NightlightIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Night Safety Mode"
                  secondary="Activate night safety mode for enhanced protection during nighttime."
                  primaryTypographyProps={{ color: '#ffffff' }}
                  secondaryTypographyProps={{ color: '#cccccc' }} // Light gray for secondary text
                />
              </CardContent>
            </Card>
          </ListItem>
          <ListItem>
            <Card
              sx={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                marginBottom: '20px',
                '&:hover': {
                  backgroundColor: '#333333',
                },
              }}
            >
              <CardContent>
                <ListItemIcon>
                  <HelpIcon sx={{ color: '#ffffff' }} />
                </ListItemIcon>
                <ListItemText
                  primary="SOS"
                  secondary="Quickly send an SOS alert to emergency contacts and authorities."
                  primaryTypographyProps={{ color: '#ffffff' }}
                  secondaryTypographyProps={{ color: '#cccccc' }} // Light gray for secondary text
                />
              </CardContent>
            </Card>
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default Features;