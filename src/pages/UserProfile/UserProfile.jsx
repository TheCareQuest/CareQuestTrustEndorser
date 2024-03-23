// UserProfile.jsx
import React, { useState } from 'react';
import Rating from '../ManageHopeSeeker/Rating';
import ReportForm from '../ManageHopeSeeker/ReportForm.jsx';
import { Link, useParams } from 'react-router-dom';

import './UserProfile.css'; // Import your CSS file

const UserProfile = ({ onClose }) => {
  const { userId } = useParams(); // Use useParams to get parameters from the URL

  const [showRating, setShowRating] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);
  const user = {
    name: 'Sana ',
    location: 'Rawalpindi, Pakistan',
    Profession: 'Labour',
    need: 'Monthly Ration',
    Charities: 3,
    Reports: 2,
    Rating: 4.5,
    avatarUrl: process.env.PUBLIC_URL + '/profileh.jpg',
  };

  const handleReportClick = () => {
    setShowReportForm(true);
    setShowRating(false); // Close the rating form if it's open
  };

  const handleRateClick = () => {
    setShowRating(true);
    setShowReportForm(false); // Close the report form if it's open
  };

  const handleCancelRating = () => {
    setShowRating(false);
  };

  const handleCancelReportForm = () => {
    setShowReportForm(false);
  };

  const handleRatingSubmit = (stars) => {
    console.log(`Rated ${stars} stars for`, user);
    setShowRating(false);
  };

  return (
    <div className='wrapper'>
      <div className={`profile-page `}>
        <div className="content">
          <div className="content__cover"></div>
          <div className="content__bull"></div>
          <div className="content__avatar">
          <img src={user.avatarUrl} alt="User Avatar" />
        </div>
        <div className="content__actions">
  <button className='button' onClick={handleReportClick}>Report</button>
  <button className='button' onClick={handleRateClick}>Endorse</button>
</div>
        <div className="content__title">
          <h1>{user.name}</h1>
          <span>{user.location}</span>
        </div>
        <div className="content__description">
          <p>{user.Profession}</p>
          <p>{user.need}</p>
        </div>
        <ul className="content__list">
          <li>
            <span>{user.Charities}</span>Charities
          </li>
          <li>
            <span>{user.Rating}</span>Rating
          </li>
          <li>
            <span>{user.Reports}</span>Reports
          </li>
        </ul>
        
      </div>
     

     
      {showRating && (
        <Rating onSubmit={handleRatingSubmit} onCancel={handleCancelRating} />
      )}
      {showReportForm && (
        <ReportForm hopeSeeker={user} onClose={handleCancelReportForm} />
      )}
    </div></div>
  );
};

export default UserProfile;
