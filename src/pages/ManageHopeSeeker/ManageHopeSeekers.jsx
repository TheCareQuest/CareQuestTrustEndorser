import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ManageHopeSeekers.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import UserProfile from "../UserProfile/UserProfile.jsx";

const ManageHopeSeekers = () => {
  const navigate = useNavigate();

  const [hopeSeekers, setHopeSeekers] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchHopeSeekers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/hopeSeekers");
        if (!response.ok) {
          throw new Error("Failed to fetch hope seekers");
        }
        const data = await response.json();
        setHopeSeekers(data.hopeSeekers);
      } catch (error) {
        console.error("Error fetching hope seekers:", error);
        // Handle error, e.g., set a flag to indicate error state
      }
    };

    fetchHopeSeekers();
  }, []);

  const filteredHopeSeekers = hopeSeekers.filter((seeker) =>
  (seeker.first_name.toLowerCase() + " " + seeker.last_name.toLowerCase()).includes(searchFilter.toLowerCase())
);

const handleViewProfile = (user) => {
  setSelectedUser(user);
  navigate(`/user/${user._id}`);
};


  return (
    <div className='wrapper'>
      <div className="manage-hope-seekers-container">
        <h2 className="primaryText">Manage Hope Seekers</h2>
        <div className="searchBar">
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
    <li key={hopeSeeker._id} className="hope-seeker-item">
      <div className="hope-seeker-details">
        <span className="info-label"> Name:</span>
        <span className="info">{hopeSeeker.first_name} {hopeSeeker.last_name}</span>
        <span className="info-label"> CNIC:</span>
        <span className="info">{hopeSeeker.CNIC}</span>
        <span className="info-label"> Profession:</span>
        <span className="info">{hopeSeeker.Profession}</span>
        <span className="info-label"> Location:</span>
        <span className="info">{hopeSeeker.location}</span>
        {/* Other fields from the backend response */}
      </div>
      <div className="hope-seeker-actions">
     
<Link className="button" to={`/user/${hopeSeeker._id}`} state={{ user: hopeSeeker }}>View Full Profile</Link>


      </div>
    </li>
  ))}
</ul>

{selectedUser && (
          <UserProfile user={selectedUser} onClose={() => setSelectedUser(null)} />
        )}
      </div>
    </div>
  );
};

export default ManageHopeSeekers;
