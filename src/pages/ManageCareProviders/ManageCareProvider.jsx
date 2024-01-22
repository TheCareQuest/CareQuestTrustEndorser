// ManageHCareProvider.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../ManageHopeSeeker/ManageHopeSeekers.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import CpProfile from "../UserProfile/CpProfile.jsx";

const ManageCareProvider = () => {
  const navigate = useNavigate();

  const [careProviders, setcareProviders] = useState([
    { id: 1, name: "Abdullah", cnic: "12345-6789012-3 ", charityCount: 3, profilePicture: "dr.jpg" ,rating:4.5, reports :3},
    { id: 2, name: "Hamza ", cnic: "98765-4321098-7 ", charityCount: 5, profilePicture: "avatar-rizky-hasanuddin.webp" ,rating:4.5, reports :3},
    { id: 3, name: "Bilal Abbas ", cnic: "98765-4321098-7 ", charityCount: 5, profilePicture: "profile.jpg",rating:4.5, reports :3 },
    // Add more hope seekers as needed
  ]);

  const [searchFilter, setSearchFilter] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredcareProviders = careProviders.filter((seeker) =>
    seeker.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    console.log(navigate); // Check if navigate is defined
    navigate(`/users/${user.id}`);
  };
  return (
  <div className='wrapper'>
    <div className="manage-hope-seekers-container">
      <h2 className="primaryText">Manage Care Provider</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Care Providers"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
      </div>

      {filteredcareProviders.length === 0 && (
        <p className="no-results">No results found for "{searchFilter}".</p>
      )}

<ul className="hope-seekers-list">
        {filteredcareProviders.map((careProvider) => (
          <li key={careProvider.id} className="hope-seeker-item">
            <div className="hope-seeker-details">
              <img
                src={process.env.PUBLIC_URL + "/" + careProvider.profilePicture}
                alt="Profile"
                className="profile-picture"
              />
              <span className="info-label"> Name:</span>
              <span className="info">{careProvider.name }</span>
              <span className="info-label"> CNIC:</span>
              <span className="info">{careProvider.cnic }</span>
              <span className="info-label"> Charity Count:</span>
              <span className="info">{careProvider.charityCount }</span>
              <span className="info-label"> Rating:</span>
              <span className="info">{careProvider.rating }</span>
            </div>
            <div className="hope-seeker-actions">
              <button
                className="button"
                onClick={() => {
                  handleViewProfile(careProvider);
                  console.log(navigate); // Check if navigate is defined
                  navigate(`/users/${careProvider.id}`);
                }}
              >
                View Full Profile
              </button>
            </div>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <CpProfile user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div></div>
  );
};

export default ManageCareProvider;