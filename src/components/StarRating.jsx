import React, { useState } from "react";

const StarRating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleMouseEnter = (starValue) => {
    setRating(starValue);
  };

  const handleMouseLeave = () => {
    setRating(initialRating || 0);
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
    if (onRatingChange) {
      onRatingChange(starValue);
    }
  };

  return (
    <>
      <div className="flex">
        {[...Array(10)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={index}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleStarClick(starValue)}
              style={{
                cursor: "pointer",
                color: rating >= starValue ? "gold" : "gray",
              }}
            >
              ★
            </span>
          );
        })}
        <p className="inline-block">{rating > 0 ? rating : ""}</p>
      </div>
    </>
  );
};

export default StarRating;
