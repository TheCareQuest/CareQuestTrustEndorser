// import React from "react";
// import './ViewCampaigns.css'
// import {AiFillHeart} from 'react-icons/ai'
// import { useNavigate } from "react-router-dom";

// const ViewCampaigns = ({card}) => {
//   const navigate = useNavigate();

//   return (
//     <div className='flexColStart cm-card' onClick={() => navigate(`../OurCampaigns/${card.charityTitle}`)}>
//       <img src={card.image} alt="campaign1" />
//       <AiFillHeart size={24} color="orange"/>
//       <span className="primaryText cm-charityTitle">
//         <span>{card.charityTitle}</span>
//       </span>
//       <span className="secondaryText"> {card.description}</span>
//     </div>
//   );
// };
import React from "react";
import './ViewCampaigns.css'
import { AiFillHeart } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

const ViewCampaigns = ({ card }) => {
  const navigate = useNavigate();

  const handleCardClick = (charityTitle) => {
    navigate(`/OurCampaigns/${charityTitle}`);
  };

  return (
    <div className='flexColStart cm-card' onClick={() => handleCardClick(card.charityTitle)}>
      <img src={card.image} alt="campaign1" />
      <AiFillHeart size={24} color="orange"/>
      <span className="primaryText cm-charityTitle">
        <span>{card.charityTitle}</span>
      </span>
      <span className="secondaryText"> {card.description}</span>
    </div>
  );
};

export default ViewCampaigns;


