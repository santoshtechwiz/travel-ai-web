import React from "react";

const CuisineTypes = ({
  options,
  selectedCuisineTypes,
  handleCuisineTypeClick,
}) => {
  return (
    <div>
      <label htmlFor="cuisineType">Cuisine Type</label>
      <div className="flex flex-row flex-wrap space-x-1">
        {options.cuisineTypes.map((cuisineType) => (
          <div
            key={cuisineType.name}
            className={
              selectedCuisineTypes.includes(cuisineType.name) ? "selected" : ""
            }
            onClick={() => {
              handleCuisineTypeClick(cuisineType.name);
            }}
          >
            <span role="img" aria-label={cuisineType.name}>
              {cuisineType.emoji}
            </span>
            <span>{cuisineType.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuisineTypes;
