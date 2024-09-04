import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import OtherPage from './pages/OtherPage'; // Example of another page
import MainLayout from './components/MainLayout'; // Import the layout
import Features from './pages/FeaturesPage';
import Contact from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Profile from './pages/Profile'
import Settings from './pages/SettingPage'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="/login" element={<Login />} />

          <Route index element={<HomePage />} />
          {/* <Route path="/other" element={<OtherPage />} /> */}
          {/* Add more routes here */}
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
