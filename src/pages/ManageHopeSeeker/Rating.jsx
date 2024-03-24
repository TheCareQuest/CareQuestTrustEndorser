import React, { useState } from "react";
import "./Rating.css";

const Rating = ({ ratedTo, onCancel }) => {
  const [rating, setRating] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false); // State for confirmation message

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = async () => {
    try {
      const ratingData = {
        ratedTo: ratedTo,
        rating: rating
      };

      const response = await fetch('http://localhost:5000/api/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ratingData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit rating');
      }

      // Show confirmation message
      setShowConfirmation(true);

      // Close confirmation message after 3 seconds
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);

      // Reset rating after submission if needed
      setRating(0);

    } catch (error) {
      console.error('Error submitting rating:', error);
      // Handle error as needed
    }
  };

  return (
    <div className="rating-container">
      <p>Rate {ratedTo}:</p>
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

      {/* Confirmation message */}
      {showConfirmation && (
        <div className="confirmation-message">
          Rating submitted successfully!
        </div>
      )}
    </div>
  );
};

export default Rating;
