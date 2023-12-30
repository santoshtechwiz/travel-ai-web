import React, { useState, useEffect } from 'react';
import HotelList from './HoteCard';


const HotelPage = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('https://travelai-91rf.onrender.com/hotels/KUL');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setHotels(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hotels:', error.message);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Hotels in Kuala Lumpur</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <HotelList hotels={hotels} />
      )}
    </div>
  );
};

export default HotelPage;
