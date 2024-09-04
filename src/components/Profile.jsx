import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, Avatar } from '@mui/material';
import { auth, db } from './firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    profilePic: '',
    emergencyContacts: ['', '', ''],
    currentAddress: '',
    workAddress: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setProfileData({
            ...data,
            emergencyContacts: data.emergencyContacts || ['', '', ''],
          });
        }
      } else {
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEmergencyContactChange = (index, value) => {
    const updatedContacts = [...profileData.emergencyContacts];
    updatedContacts[index] = value;
    setProfileData((prevData) => ({
      ...prevData,
      emergencyContacts: updatedContacts,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      await setDoc(doc(db, 'users', user.uid), profileData);
      alert('Profile updated successfully!');
      setIsEditing(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1c1c1e', color: 'white', padding: '20px' }}>
      <Container maxWidth="sm" style={{ backgroundColor: '#2e2e30', padding: '40px', borderRadius: '12px', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <Avatar src={profileData.profilePic} alt={profileData.fullName} style={{ width: 80, height: 80, backgroundColor: '#ff4d4d' }}>
              {profileData.fullName.charAt(0)}
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="h1" style={{ color: '#ff4d4d' }}>
              {isEditing ? 'Edit Profile' : 'Profile'}
            </Typography>
          </Grid>
        </Grid>

        {!isEditing ? (
          <Box mt={3}>
            <Typography variant="h6">Full Name</Typography>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              {profileData.fullName}
            </Typography>
            <Typography variant="h6">Email</Typography>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              {profileData.email}
            </Typography>
            <Typography variant="h6">Emergency Contacts</Typography>
            {profileData.emergencyContacts.map((contact, index) => (
              <Typography key={index} variant="body1" style={{ marginBottom: '8px' }}>
                {`Contact ${index + 1}: ${contact}`}
              </Typography>
            ))}
            <Typography variant="h6">Current Address</Typography>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              {profileData.currentAddress}
            </Typography>
            <Typography variant="h6">Work Address</Typography>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              {profileData.workAddress}
            </Typography>
            <Button variant="contained" color="error" onClick={() => setIsEditing(true)} style={{ backgroundColor: '#ff4d4d', color: 'white', marginTop: '20px' }}>
              Edit Profile
            </Button>
          </Box>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <TextField
              fullWidth
              margin="normal"
              label="Full Name"
              name="fullName"
              value={profileData.fullName}
              onChange={handleChange}
              required
              variant="outlined"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              style={{ marginBottom: '20px' }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              required
              disabled
              variant="outlined"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              style={{ marginBottom: '20px' }}
            />
            <Typography variant="h6" component="h2" style={{ color: '#ff4d4d', marginTop: '20px' }}>
              Emergency Contacts
            </Typography>
            {profileData.emergencyContacts.map((contact, index) => (
              <TextField
                key={index}
                fullWidth
                margin="normal"
                label={`Emergency Contact ${index + 1}`}
                value={contact}
                onChange={(e) => handleEmergencyContactChange(index, e.target.value)}
                required
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
                style={{ marginBottom: '20px' }}
              />
            ))}
            <Typography variant="h6" component="h2" style={{ color: '#ff4d4d', marginTop: '20px' }}>
              Addresses
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              label="Current Address"
              name="currentAddress"
              value={profileData.currentAddress}
              onChange={handleChange}
              variant="outlined"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              style={{ marginBottom: '20px' }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Work Address"
              name="workAddress"
              value={profileData.workAddress}
              onChange={handleChange}
              variant="outlined"
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
              style={{ marginBottom: '20px' }}
            />
            <Box mt={3} display="flex" justifyContent="space-between">
              <Button variant="contained" onClick={() => setIsEditing(false)} style={{ backgroundColor: '#999', color: 'white', padding: '10px 20px' }}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="error" style={{ backgroundColor: '#ff4d4d', color: 'white', padding: '10px 20px' }}>
                Save Changes
              </Button>
            </Box>
          </form>
        )}
      </Container>
    </div>
  );
};

export default Profile;
