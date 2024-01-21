import React, { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Campaigns.css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';
import ViewCampaigns from '../ViewCampaigns/ViewCampaigns';

const Campaigns = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const handleCardClick = (campaignId) => {
    setSelectedCampaign(campaignId);
  };

  const resetSelectedCampaign = () => {
    setSelectedCampaign(null);
  };

  return (
    <section className="cm-wrapper">
      <div className='paddings innerWidth cm-container'>
        <div className='cm-head flexColStart'>
          <span className='primaryText'>Our Campaigns</span>
        </div>

        {selectedCampaign ? (
          <CampaignDetail campaignId={selectedCampaign} resetSelectedCampaign={resetSelectedCampaign} />
        ) : (
          <Swiper {...sliderSettings}>
            <SlidersButton />
            {data.map(({ id, ...card }) => (
              <SwiperSlide key={id}>
                <ViewCampaigns card={card} onClick={() => handleCardClick(id)} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

const SlidersButton = () => {
  const swiper = useSwiper();

  return (
    <div className='cm-buttons'>
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

const CampaignDetail = ({ campaignId, resetSelectedCampaign }) => {
  // Fetch campaign details using campaignId and display them here
  // You can create a separate CampaignDetail component for this purpose
  return (
    <div>
      <p>Campaign Details for ID: {campaignId}</p>
      <button onClick={resetSelectedCampaign}>Back to Campaigns</button>
    </div>
  );
};

export default Campaigns;