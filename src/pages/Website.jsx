import React from 'react';
import Hero from "../components/Hero/Hero.jsx";
import Campaigns from '../components/Campaigns/Campaigns.jsx';
import Supporters from '../components/Supporters/Supporters.jsx';
import Mission from '../components/Mission/Mission.jsx';
import ParallaxComponent from '../components/Parallax/ParallaxComponent.jsx';

const Website = () => {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Hero />
        </div>
        {/* <LoginPage /> */}
        <Campaigns />
        <Mission />
{/* <ParallaxComponent/> */}
        <Supporters />
      </div>
    </>
  );
}

export default Website;
