import React, { useState } from 'react';


const HotelCard = ({ hotel }) => {
  const { name, address, rating, types, photoUrl, detailUrl } = hotel;

  const formattedAddress = address.replace(/, /g, ',\u00A0'); // Add non-breaking space after commas

  return (
    <a href={detailUrl} target="_blank" rel="noopener noreferrer" className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md m-4">
      <div>
        <img
          className="h-48 w-full object-cover"
          src={photoUrl} // Assuming you want to display the first photo
          alt={`${name} Image`}
        />
      </div>
      <div className="p-4">
        <p className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
          {name}
        </p>
        <p className="mt-2 text-gray-600">
         {formattedAddress}
        </p>
        <div className="flex items-center mt-2">
          <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs font-semibold">
            {rating}
          </span>
        </div>
      </div>
    </a>
  );
};



const HotelList = ({ hotels }) => {
  const [displayCount, setDisplayCount] = useState(5);

  // Check if hotels array is not empty before rendering the card
  if (!hotels || hotels.length === 0) {
    return null; // or render a loading state if needed
  }

  const visibleHotels = hotels.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5); // Increase count by 5 on each click
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {visibleHotels.map((hotel) => (
          <HotelCard key={hotel.name} hotel={hotel} />
        ))}
      </div>
      {displayCount < hotels.length && (
        <button
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default HotelList;
