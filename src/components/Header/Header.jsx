// Header.js
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { BiMenuAltRight, BiUser } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import LogoutScreen from '../logoutScreen/LogoutScreen.jsx';

const Header = ({ handleLogout }) => {

  const [menuOpened, setMenuOpened] = useState(false);
  const [profileOptionsOpened, setProfileOptionsOpened] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const navigate = useNavigate();
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: menuOpened ? "-100%" : "0",
        top: menuOpened ? "0" : "auto", // Set top to 0 when menu is opened
      };
    }
    return {};
  };
  const handleProfileClick = () => {
    setProfileOptionsOpened(!profileOptionsOpened);
  };

  const handleEditProfile = () => {
    // Add logic for editing profile
    // Example: navigate('/edit-profile');
    setProfileOptionsOpened(false);
  };
  const handleLogoutClick = () => {
    setLoggingOut(true);

    // Simulate a logout delay
    setTimeout(() => {
      setLoggingOut(false);
      handleLogout();
      navigate("/login");
    }, 4000);
  };
  return (
    <section className="h-wrapper">
     
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logoc.png" alt="logo" width={100} />
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
            setProfileOptionsOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/CareProvider">Manage CareProvider</NavLink>
            <NavLink to="/HopeSeeker">Manage Hope Seekers</NavLink>
            <NavLink to="/Notification">Notification</NavLink>
            <div className="profile-icon" onClick={handleProfileClick}>
              <BiUser size={24} />
              {profileOptionsOpened && (
                <div className="profile-options">
                  <span className="option" onClick={handleEditProfile}>
                    Edit Profile
                  </span>
                  <span className="option" onClick={handleLogoutClick}>
                    Logout
                  </span>
                </div>
              )}
            </div>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />|
        </div>
      </div>
      {loggingOut && <LogoutScreen onLogoutComplete={() => navigate('/login')} />}
    
    </section>
  );
};

export default Header;
{/* <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logoc.png" alt="logo" width={70} />
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
            setProfileOptionsOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/OurCampaigns">Campaigns</NavLink> 
            <NavLink to="/HopeSeeker">Manage Hope Seekers</NavLink>
            <NavLink to="/Notification">Notification</NavLink>
            <div className="profile-icon" onClick={handleProfileClick}>
              <BiUser size={24} />
              {profileOptionsOpened && (
                <div className="profile-options">
                  <span className="option" onClick={handleEditProfile}>
                    Edit Profile
                  </span>
                  <span className="option" onClick={handleLogoutClick}>
                    Logout
                  </span>
                </div>
              )}
            </div>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />|
        </div>
      </div>
      {loggingOut && <LogoutScreen onLogoutComplete={() => navigate('/login')} />}

    </section> */}