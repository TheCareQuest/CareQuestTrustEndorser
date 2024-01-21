import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CharityForm.css';
import TokenPopup from '../../Token/TokenPopup.js';

const CharityForm = ({ onFormSubmit, onCloseForm }) => {
  const [familySize, setFamilySize] = useState('');
  const [needDescription, setNeedDescription] = useState('');
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [incomeProof, setIncomeProof] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  const [errors, setErrors] = useState({});
  const [showTokenPopup, setShowTokenPopup] = useState(false); // State to manage the display of the token popup
  const [tokenData, setTokenData] = useState(null); // State to store token data
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/OurCampaigns/:charityTitle');
  };

  const handleFileChange = (e) => {
    setIncomeProof(e.target.files[0]);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!/^\d{11}$/.test(contactNumber)) {
      newErrors.contactNumber = 'Contact number must be 11 digits';
    }

    if (!familySize.trim()) {
      newErrors.familySize = 'Family size is required';
    }

    if (!needDescription.trim()) {
      newErrors.needDescription = 'Description of needs is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const formData = {
        familySize,
        needDescription,
        fullName,
        contactNumber,
        address,
        incomeProof,
        otherDetails,
      };

      // Mock data for the token (replace with actual token generation logic)
      const mockTokenData = {
        careQuestId:'CQT172635',
        campaignName: 'Free Education Drive',
        Name: 'Ali Azmat',
        time: getCurrentTime(),
        CNIC: '12345678901',
        profilePic: '/profile.jpg', // Replace with the path to the profile picture
      };

      setTokenData(mockTokenData);
      setShowTokenPopup(true);
    }
  };

  function getCurrentTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;
  
    // Add leading zeros to minutes if needed
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }
  const handleTokenPopupClose = () => {
    setShowTokenPopup(false);
  };

  return (
    <div className='container'>
      <div className="charity-form-container">
        <h2 id="headerTitle">Charity Request Form</h2>
        <div className="charity-form">
          <div className="charity-form-row">
            <label htmlFor="fullName">Hope Seeker's Full Name:</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            {errors.fullName && <p className="error-text">{errors.fullName}</p>}
          </div>

          <div className="charity-form-row">
            <label htmlFor="contactNumber">Hope Seeker's Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              placeholder="Enter your contact number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
            {errors.contactNumber && <p className="error-text">{errors.contactNumber}</p>}
          </div>

          <div className="charity-form-row">
            <label htmlFor="incomeProof">Hope Seeker's Income Proof:</label>
            <input
              type="file"
              id="incomeProof"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={handleFileChange}
            />
          </div>


          <div className="charity-form-row">
            <label htmlFor="otherDetails">How you know Hope Seeker?:</label>
            <input
              id="otherDetails"
              placeholder="Provide any additional details"
              value={otherDetails}
              onChange={(e) => setOtherDetails(e.target.value)}
              required
            />
            {errors.otherDetails && <p className="error-text">{errors.otherDetails}</p>}
          </div>

          <div className="charity-form-row">
            <label htmlFor="familySize">Hope Seeker's Family Size:</label>
            <input
              type="number"
              id="familySize"
              placeholder="Enter your family size"
              value={familySize}
              onChange={(e) => setFamilySize(e.target.value)}
              required
            />
            {errors.familySize && <p className="error-text">{errors.familySize}</p>}
          </div>

          <div className="charity-form-row">
            <label htmlFor="needDescription">Description of Hope Seeker's Needs:</label>
            <input
              id="needDescription"
              placeholder="Describe needs"
              value={needDescription}
              onChange={(e) => setNeedDescription(e.target.value)}
              required
            />
            {errors.needDescription && <p className="error-text">{errors.needDescription}</p>}
          </div>

          <div className="charity-form-row charity-form-button-group">
            <button className="button" onClick={handleSubmit}>
              Submit
            </button>
            <button className="button" onClick={handleReturn}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Render TokenPopup component conditionally based on showTokenPopup state */}
      {showTokenPopup && <TokenPopup tokenData={tokenData} onClose={handleTokenPopupClose} />}
    </div>
  );
};

export default CharityForm;