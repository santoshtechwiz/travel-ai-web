import React, { useState, useEffect } from "react";
import HotelList from "./HoteCard";
import KlookAffiliateWidget from "./KlookAffiliateWidget";

const HotelPage2 = ({ cityName }) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(
          `https://travelai-91rf.onrender.com/hotels/${cityName}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setHotels(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hotels:", error.message);
        setLoading(false);
      }
    };

    fetchHotels();
  }, [cityName]);

  return (
    <div>
      <hr />
      <h1 className="text-3xl font-semibold mb-4">
        Places to visit in {cityName}
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
         
            <KlookAffiliateWidget></KlookAffiliateWidget>
          
          <HotelList hotels={hotels} />
        </>
      )}
    </div>
  );
};

export default HotelPage2;
