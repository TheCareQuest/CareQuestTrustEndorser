import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CharityForm from './CharityForm/CharityForm.jsx';
import './CharityDetails.css';

const CharityDetails = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const handleApplyClick = () => {
    console.log('Apply Now button clicked');

    // Navigate to the /charityForm route
    navigate('/charityForm');

    // Set showForm to true
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    if (formData) {
      console.log('Form Data:', formData);
      // Do something with the form data if needed
    }

    // Close the form
    setShowForm(false);
  };

  return (
    <div className='wrapper'>
      <div className="charity-flexCenters paddings innerWidth charity-container">
        <div className="flexCenters charity-details">
          <div className="flexColStart">
            <span className="primaryText head">
              <h1>Free Education Drive</h1>
            </span>

            <span className="secondaryText">
              <p><strong>Charity Title:</strong></p>
              <p>Roshan Mustaqbil</p>
              <p><strong>Care Provider Name:</strong></p>
              <p>Sana Kiyani</p>
              <p><strong>Location:</strong></p>
              <p>G-10 Markaz, Islamabad</p>
              <p><strong>Email:</strong></p>
              <p>sanakiyani89@gmail.com</p>
              <p><strong>Type of Aid:</strong></p>
              <p>Free Education Service</p>
              <p><strong>Mode of Assistance:</strong></p>
              <span>A world where education knows no price tag<br />for every child's bright tomorrow.</span>
              <span><p><strong>Eligibility Criteria:</strong></p></span>
              <ul>
                <li><strong>Age:</strong><br />Children between the ages of 5 and 16 are<br />eligible to enroll.</li>
                <li><strong>Documentation:</strong><br />Submission of necessary documentation,<br />
                  such as proof of income, residence, etc to<br />verify eligibility.</li>
              </ul>
              <br />
              {/* Centered button */}
              <div className="flexCenters">
                <button className="buttonch" onClick={handleApplyClick}>
                  Apply Now!
                </button>
              </div>
            </span>
          </div>
          <div className="flexCenters b-right">
            <motion.div
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
              className="charity-image-container"
            >
              <img src="/download.jpg" alt="free education" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Render CharityForm component conditionally based on showForm state */}
      {showForm && (
        <CharityForm onFormSubmit={handleFormSubmit} onCloseForm={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default CharityDetails;