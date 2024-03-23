import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Rating from '../ManageHopeSeeker/Rating';
import ReportForm from '../ManageHopeSeeker/ReportForm';

const UserProfile = () => {
  const location = useLocation();
  const { user } = location.state || {}; // Access user object from location state

  if (!user) {
    return <div>No user data found</div>;
  }

  // Static avatar URL
  const defaultAvatarUrl = process.env.PUBLIC_URL + '/profileh.jpg';

  // Default values for properties if they are not present in the user object
  const defaultNeed = 'No specific need';
  const defaultCharities = 0;
  const defaultReports = 0;
  const defaultRating = 0;

  // Ensure user object is defined and has avatarUrl property or provide a default value
  const avatarUrl = defaultAvatarUrl;

  // State for showing rating form
  const [showRating, setShowRating] = useState(false);

  // State for showing report form
  const [showReportForm, setShowReportForm] = useState(false);

  // Handlers for showing/hiding rating form
  const handleRateClick = () => {
    setShowRating(true);
    setShowReportForm(false); // Close the report form if it's open
  };

  const handleCancelRating = () => {
    setShowRating(false);
  };

  // Handlers for showing/hiding report form
  const handleReportClick = () => {
    setShowReportForm(true);
    setShowRating(false); // Close the rating form if it's open
  };

  const handleCancelReportForm = () => {
    setShowReportForm(false);
  };

  // Render user profile using user data
  return (
    <div className='wrapper'>
      <div className={`profile-page `}>
        <div className="content">
          {/* Render user profile using user data */}
          <div className="content__cover"></div>
          <div className="content__bull"></div>
          <div className="content__avatar">
            <img src={avatarUrl} alt="User Avatar" />
          </div>
          <div className="content__actions">
            <button className='button' onClick={handleReportClick}>Report</button>
            <button className='button' onClick={handleRateClick}>Rate</button>
          </div>
          <div className="content__title">
            <h1>{user.first_name} {user.last_name}</h1>
            <span>{user.location}</span>
          </div>
          <div className="content__description">
            <p>{user.Profession}</p>
            <p>{user.need ? user.need : defaultNeed}</p>
          </div>
          <ul className="content__list">
            <li>
              <span>{user.Charities ? user.Charities : defaultCharities}</span>Charities
            </li>
            <li>
              <span>{user.Rating ? user.Rating : defaultRating}</span>Rating
            </li>
            <li>
              <span>{user.Reports ? user.Reports : defaultReports}</span>Reports
            </li>
          </ul>
        </div>
        {/* Render Rating form if showRating state is true */}
        {showRating && (
          <Rating onSubmit={(stars) => console.log(`Rated ${stars} stars for`, user)} onCancel={handleCancelRating} />
        )}
        {/* Render Report form if showReportForm state is true */}
        {showReportForm && (
          <ReportForm hopeSeeker={user} onClose={handleCancelReportForm} />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
