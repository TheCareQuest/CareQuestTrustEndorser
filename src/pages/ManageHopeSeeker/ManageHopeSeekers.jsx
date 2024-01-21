// ManageHopeSeekers.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ManageHopeSeekers.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import UserProfile from "../UserProfile/UserProfile.jsx";

const ManageHopeSeekers = () => {
  const navigate = useNavigate();

  const [hopeSeekers, setHopeSeekers] = useState([
    { id: 1, name: "Ali Ahmed ", cnic: "12345-6789012-3 ", charityCount: 3, profilePicture: "avatar-jacob-thompson.webp" ,rating:4.5, reports :3},
    { id: 2, name: "Hamza ", cnic: "98765-4321098-7 ", charityCount: 5, profilePicture: "avatar-rizky-hasanuddin.webp" ,rating:4.5, reports :3},
    { id: 3, name: "Bilal Abbas ", cnic: "98765-4321098-7 ", charityCount: 5, profilePicture: "profile.jpg",rating:4.5, reports :3 },
    // Add more hope seekers as needed
  ]);

  const [searchFilter, setSearchFilter] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredHopeSeekers = hopeSeekers.filter((seeker) =>
    seeker.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    console.log(navigate); // Check if navigate is defined
    navigate(`/user/${user.id}`);
  };
  return (
  <div className='wrapper'>
    <div className="manage-hope-seekers-container">
      <h2 className="primaryText">Manage Hope Seekers</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Hope Seekers"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
      </div>

      {filteredHopeSeekers.length === 0 && (
        <p className="no-results">No results found for "{searchFilter}".</p>
      )}

<ul className="hope-seekers-list">
        {filteredHopeSeekers.map((hopeSeeker) => (
          <li key={hopeSeeker.id} className="hope-seeker-item">
            <div className="hope-seeker-details">
              <img
                src={process.env.PUBLIC_URL + "/" + hopeSeeker.profilePicture}
                alt="Profile"
                className="profile-picture"
              />
              <span className="info-label"> Name:</span>
              <span className="info">{hopeSeeker.name }</span>
              <span className="info-label"> CNIC:</span>
              <span className="info">{hopeSeeker.cnic }</span>
              <span className="info-label"> Charity Count:</span>
              <span className="info">{hopeSeeker.charityCount }</span>
              <span className="info-label"> Rating:</span>
              <span className="info">{hopeSeeker.rating }</span>
            </div>
            <div className="hope-seeker-actions">
              <button
                className="button"
                onClick={() => {
                  handleViewProfile(hopeSeeker);
                  console.log(navigate); // Check if navigate is defined
                  navigate(`/user/${hopeSeeker.id}`);
                }}
              >
                View Full Profile
              </button>
            </div>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <UserProfile user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div></div>
  );
};

export default ManageHopeSeekers;