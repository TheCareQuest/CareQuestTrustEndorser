// LogoutScreen.jsx
import React, { useEffect } from 'react';
import './LogoutScreen.css'; // Create a CSS file for styling

const LogoutScreen = ({ onLogoutComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLogoutComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLogoutComplete]);

  return (
    <div className="logout-screen">
      <img src="/logo-animated.gif" alt="Logo" />
      <p>Logging out...</p>
    </div>
  );
};

export default LogoutScreen;
