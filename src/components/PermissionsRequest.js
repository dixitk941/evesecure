import React, { useEffect } from 'react';

const PermissionsRequest = () => {
  useEffect(() => {
    // Request location permission
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Location permission granted:', position);
        },
        (error) => {
          console.error('Location permission denied:', error);
        }
      );
    }

    // Request camera and microphone permissions
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
          console.log('Camera and microphone permissions granted:', stream);
          // Stop all tracks to release the camera and microphone
          stream.getTracks().forEach(track => track.stop());
        })
        .catch((error) => {
          console.error('Camera and microphone permissions denied:', error);
        });
    }
  }, []);

  return null;
};

export default PermissionsRequest;