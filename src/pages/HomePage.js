// src/pages/HomePage.js
import React from 'react';
// import { Container, useMediaQuery } from '@mui/material';
// import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
// import Footer from '../components/Footer';

const HomePage = () => {
//   const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <>
      {/* <Header /> */}
      {/* <Container
        maxWidth="lg"
        sx={{
          padding: isSmallScreen ? '10px' : '20px',
        }}
      > */}
        <Hero />
        <Features />
      {/* </Container> */}
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;