import React from 'react';
import "react-accessible-accordion/dist/fancy-example.css";
import './Mission.css';

const Mission = () => {
  return (
    <section className="m-wrapper">
      <div className="paddings innerWidth flexCenter m-container">
        
        <div className="m-left">
          <div className="image-container">
            <img src="./mission.png" alt="mission" />
            </div></div>

            <div className="flexColStart m-right">
              <span className='primaryText'>Our Mission</span>
              <span className='secondaryText'>"At The Care Quest, our mission is to create positive and lasting change by leveraging the power of collective compassion. We are striving to uplift communities and individuals in need. Through transparent and impactful initiatives, we aim to inspire generosity, foster hope, and build a world where everyone has the opportunity for a better, brighter future. Join us in our commitment to make a meaningful difference, one act of kindness at a time."</span>
            </div>
          </div>

    </section>
  );
};

export default Mission;
