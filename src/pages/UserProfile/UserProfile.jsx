import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Rating from '../ManageHopeSeeker/Rating';
import ReportForm from '../ManageHopeSeeker/ReportForm';

const UserProfile = () => {
  const location = useLocation();
  const { user } = location.state || {}; // Access user object from location state

  const [rating, setRating] = useState(null);
  const [totalReports, setTotalReports] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch rating and total reports for the user from backend
    const fetchUserData = async () => {
      try {
        const responseRating = await fetch(`http://localhost:5000/api/ratings/${user.username}`);
        if (!responseRating.ok) {
          throw new Error('Failed to fetch rating');
        }
        const ratingData = await responseRating.json();
        setRating(ratingData.rating);

        const responseReports = await fetch(`http://localhost:5000/api/reports/total/${user.username}`);
        if (!responseReports.ok) {
          throw new Error('Failed to fetch total reports');
        }
        const totalReportsData = await responseReports.json();
        setTotalReports(totalReportsData.totalReports);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [user]);

  if (!user) {
    return <div>No user data found</div>;
  }

  // Static avatar URL
  const defaultAvatarUrl = process.env.PUBLIC_URL + '/user-avatar.png';

  // Default values for properties if they are not present in the user object
  const defaultNeed = 'No specific need';
  const defaultCharities = 0;
  const defaultRating = 0;
  const defaultTotalReports = 0;

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
            <h1>{user.firstName} {user.lastName}</h1>
            <span>{user.username}</span>
          </div>
          <div className="content__description">
            <p>{user.cnic}</p>
            <p>{user.contactNumber}</p>
            <p>{user.need ? user.need : defaultNeed}</p>
          </div>
          <ul className="content__list">
            <li>
              <span>{user.Charities ? user.Charities : defaultCharities}</span>Charities
            </li>
            <li>
              <span>{rating !== null ? rating : defaultRating}</span>Rating
            </li>
            <li>
              <span>{totalReports !== null ? totalReports : defaultTotalReports}</span>Reports
            </li>
          </ul>
        </div>
        {/* Render Rating form if showRating state is true */}
        {showRating && (
          <Rating ratedTo={user.username} onCancel={handleCancelRating} />
        )}

        {/* Render Report form if showReportForm state is true */}
        {showReportForm && (
          <ReportForm
            reportedTo={user.username} // Passing reportedTo prop to ReportForm
            onClose={handleCancelReportForm}
          />
        )}
      </div>
    </div>
  );
};
export default UserProfile;
