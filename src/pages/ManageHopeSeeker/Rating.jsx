// Rating component (Rating.jsx)
import React, { useState } from "react";
import "./Rating.css";

const Rating = ({ onSubmit, onCancel }) => {
  
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating > 0) {
      // Submit the rating to the parent component
      onSubmit(rating);
    }
  };

  return (
    <div className="rating-container">
      <p>Select your rating:</p>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= rating ? "selected" : ""}`}
            onClick={() => handleStarClick(value)}
          >
            ★
          </span>
        ))}
      </div>
      <button className="button" onClick={handleSubmit}>
        Submit
      </button>
      <button className="button" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};

export default Rating;
