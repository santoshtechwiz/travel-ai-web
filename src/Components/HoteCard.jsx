import React from 'react';

const HotelCard = ({ hotel }) => {
    const { name, chainCode, geoCode, address, lastUpdate } = hotel;
  
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md m-4">
        <div className="flex">
          <div className="flex-shrink-0">
            {/* <img
              className="h-48 w-full object-cover md:w-48"
              src={hotel.imageURL}
              alt={`${name} Image`}
            /> */}
          </div>
          <div className="p-4">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {chainCode}
            </div>
            <p className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
              {name}
            </p>
            <p className="mt-2 text-gray-600">
              Latitude: {geoCode.latitude}, Longitude: {geoCode.longitude}
            </p>
            <p className="mt-2 text-gray-600">Country Code: {address.countryCode}</p>
            <p className="mt-2 text-gray-600">Last Update: {lastUpdate}</p>
          </div>
        </div>
      </div>
    );
  };
const HotelList = ({ hotels }) => {
  // Check if hotels array is not empty before rendering the card
  if (!hotels || hotels.length === 0) {
    return null; // or render a loading state if needed
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.hotelId} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
