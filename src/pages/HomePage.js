// HomePage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../components/firebaseConfig';
import Hero from '../components/Hero';
import Features from '../components/Features';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      <Hero />
      <Features />
    </>
  );
};

export default HomePage;