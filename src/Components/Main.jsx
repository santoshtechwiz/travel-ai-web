import { TypeAnimation } from "react-type-animation";
import ResponseData from "./ResponseData";
import React, { useState } from "react";

const Main = ({ loading, response, images, cityName }) => {
  const [textColor, setTextColor] = useState('black');

  return (
    <div>
      <h1 className="text-2xl text-center font-bold text-blue-500 my-4">⭐️ Travel Planner ⭐️</h1>
      {!response && (<p className="text-sm text-gray-700 mb-8">Fill the form to generate your itinerary</p>
      )}
      <div className="flex justify-center items-center w-full">
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            'Explore exotic destinations around the world', // initially rendered starting point
            1000,
            () => setTextColor('aqua'), // change text color to aqua
            'Immerse yourself in diverse cultures and experiences',
            1000,
            () => setTextColor('deeppink'), // change text color to deeppink
            'Create lasting memories with our personalized itineraries',
            1000,
            () => setTextColor('darkkhaki'), // change text color to darkkhaki
            'Embark on a journey of a lifetime with Travel Planner',
            500,
          ]}
          speed={50}
          style={{ fontSize: '2em', color: textColor }}
          repeat={Infinity}
        />
      </div>
      <div className="mt-8">
        {loading ? (
          <p className="text-lg text-blue-500">Loading...</p>
        ) : (
          response && <ResponseData response={response} images={images} cityName={cityName} />
        )}
      </div>
    </div>
  );
};

export default Main;
