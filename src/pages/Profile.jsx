import React, { useEffect } from 'react';
import Profile from '../components/Profile';

const ProfilePage = () => {
  useEffect(() => {
    // Apply dark theme to the body element
    document.body.classList.add('bg-gray-900', 'text-white');
    return () => {
      // Clean up the classes when the component is unmounted
      document.body.classList.remove('bg-gray-900', 'text-white');
    };
  }, []);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* <h1 className="text-4xl font-bold text-red-500 mb-6">Profile Page</h1> */}
        <Profile />
      </div>
    </div>
  );
};

export default ProfilePage;