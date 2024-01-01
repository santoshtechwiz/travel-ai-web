import React from "react";

const Interests = ({ options, selectedInterests, handleInterestClick }) => {
  return (
    <div>
      <label htmlFor="interests">Interests</label>
      <div className="flex flex-row flex-wrap space-x-1">
        {options.interestsNew.map((interest, index) => (
          <div
            key={index}
            className={
              selectedInterests.includes(interest?.name) ? "selected" : ""
            }
            onClick={() => {
              handleInterestClick(interest.name);
            }}
            value={interest}
          >
            <span aria-label="emoji">{interest.emoji}</span>
            <span>{interest.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
