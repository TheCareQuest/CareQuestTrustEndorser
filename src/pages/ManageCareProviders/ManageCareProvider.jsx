import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../ManageHopeSeeker/ManageHopeSeekers.css";
import UserProfile from "../UserProfile/UserProfile.jsx";

const ManageCareProviders = () => {
  const navigate = useNavigate();

  const [careProviders, setCareProviders] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchCareProviders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/careProviders");
        if (!response.ok) {
          throw new Error("Failed to fetch care providers");
        }
        const data = await response.json();
        setCareProviders(data.careProviders);
      } catch (error) {
        console.error("Error fetching care providers:", error);
      }
    };

    fetchCareProviders();
  }, []);

  const filteredCareProviders = careProviders.filter((provider) => {
    const fullName = `${provider.firstName || ''} ${provider.lastName || ''}`.toLowerCase();
    return fullName.includes(searchFilter.toLowerCase());
  });

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    navigate(`/user/${user._id}`);
  };

  return (
    <div className="wrapper">
      <div className="manage-hope-seekers-container">
        <h2 className="primaryText">Manage Care Providers</h2>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search Care Providers"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
          />
        </div>

        {filteredCareProviders.length === 0 && (
          <p className="no-results">No results found for "{searchFilter}".</p>
        )}

        <ul className="hope-seekers-list">
          {filteredCareProviders.map((careProvider) => (
            <li key={careProvider._id} className="hope-seeker-item">
              <div className="hope-seeker-details">
                <span className="info-label">Name:</span>
                <span className="info">{careProvider.firstName} {careProvider.lastName}</span>
                <span className="info-label">CNIC:</span>
                <span className="info">{careProvider.cnic}</span>
                <span className="info-label">Email:</span>
                <span className="info">{careProvider.email}</span>
                <span className="info-label">Contact Number:</span>
                <span className="info">{careProvider.contactNumber}</span>
              </div>
              <div className="hope-seeker-actions">
                <Link className="button" to={`/user/${careProvider._id}`} state={{ user: careProvider }}>View Full Profile</Link>
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

export default ManageCareProviders;
