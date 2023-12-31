import React from "react";

const LocationButtons = ({ topLocations, handleLocationClick }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="topDestinations"
        className="block text-sm font-medium text-gray-700"
      >
        🔥 Top Destinations:
      </label>
      <div className="space-y-2">
        {topLocations.map((location) => (
          <button
            key={location.value}
            type="button"
            onClick={() => handleLocationClick(location)}
            className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {location.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LocationButtons;
