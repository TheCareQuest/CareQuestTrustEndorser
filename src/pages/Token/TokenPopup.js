import React, { useRef, useEffect } from 'react';
import './TokenPopup.css';

const TokenPopup = ({ tokenData, onClose }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions
    const canvasWidth = 400;
    const canvasHeight = 500;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Draw a gradient background
    drawGradientBackground(context, canvasWidth, canvasHeight);

    // Draw a gradient background with border
    const borderWidth = 4; // Adjust border width as needed

    // Draw the border
    context.fillStyle = '#5c9c90'; // Border color
    context.fillRect(0, 0, canvasWidth, borderWidth); // Top border
    context.fillRect(0, 0, borderWidth, canvasHeight); // Left border
    context.fillRect(0, canvasHeight - borderWidth, canvasWidth, borderWidth); // Bottom border
    context.fillRect(canvasWidth - borderWidth, 0, borderWidth, canvasHeight); // Right border

    // Draw a gradient background
    const gradient = context.createLinearGradient(0, 0, 0, canvasHeight);
    gradient.addColorStop(0, '#b7d8d2'); // Lightest color
    gradient.addColorStop(1, '#ffffff'); // White
    context.fillStyle = gradient;
    context.fillRect(borderWidth, borderWidth, canvasWidth - 2 * borderWidth, canvasHeight - 2 * borderWidth);

    // Load the profile picture
    const profileImage = new Image();
    profileImage.crossOrigin = 'anonymous';
    profileImage.src = tokenData?.profilePic;
    profileImage.onload = () => {
      const imageSize = 200; // Adjust the image size as needed
      const centerX = (canvasWidth - imageSize) / 2;
      const centerY = (canvasHeight - imageSize) / 7; // Adjust the divisor to control the vertical position

      // Draw the circular profile picture in the adjusted position
      drawCircularProfile(context, profileImage, centerX, centerY, imageSize);

      // Add text details above the center
      context.font = '18px Arial';
      context.fillStyle = '#3e7c71';
      context.textAlign = 'center';
      const textY = centerY + imageSize + 20; // Adjust the spacing between the image and text
      context.fillText(`Campaign Name: ${tokenData?.campaignName}`, canvasWidth / 2, textY);
      context.fillText(`CNIC: ${tokenData?.CNIC}`, canvasWidth / 2, textY + 30);
      context.fillText(`Time: ${tokenData?.time}`, canvasWidth / 2, textY + 60);
      context.fillText(`Name: ${tokenData?.Name}`, canvasWidth / 2, textY + 90);
      context.fillText(`CareQuest ID: ${tokenData?.careQuestId}`, canvasWidth / 2, textY + 120); // Added CareQuest ID

      // Add verification stamp image as a signature
      const stampImage = new Image();
      stampImage.src = '/stamp.png'; // Update with the correct path
      stampImage.onload = () => {
        context.drawImage(stampImage, canvasWidth - 80, canvasHeight - 80, 60, 60);
      };
    };
  }, [tokenData]);

  const drawGradientBackground = (context, width, height) => {
    // Gradient colors for a modern light gradient
    const gradient = context.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#f5f5f5');
    gradient.addColorStop(1, '#e0e0e0');
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
  };

  const drawCircularProfile = (context, image, x, y, diameter) => {
    // Draw circular profile picture
    context.save();
    context.beginPath();
    context.arc(x + diameter / 2, y + diameter / 2, diameter / 2, 0, Math.PI * 2);
    context.clip();
    context.drawImage(image, x, y, diameter, diameter);
    context.restore();
  };

  const downloadToken = () => {
    const dataUrl = canvasRef.current.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'token_carequest.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="token-popup-overlay">
      <div className="token-popup">
        <button className="button" onClick={onClose}>
          Close
        </button>
        <h2 className="token-title">Token Information</h2>
        <div className="profile-pic-container">
          <canvas ref={canvasRef} id="token-canvas" style={{ display: 'none' }} />
        </div>
        <div className="profile-pic-container">
          <img
            src={tokenData?.profilePic}
            alt="Profile Picture"
            className="profile-pic"
          />
        </div>
        <div className="token-details">
        <p>CareQuest ID: {tokenData?.careQuestId}</p>
          <p>Campaign Name: {tokenData?.campaignName}</p>
          <p>Name: {tokenData?.Name}</p>
          <p>Time: {tokenData?.time}</p>
          <p>CNIC: {tokenData?.CNIC}</p>
          {/* Add more details as needed */}
        </div>
        <a href="#" onClick={downloadToken} className="button">
          Download Token
        </a>
      </div>
    </div>
  );
};

export default TokenPopup;
