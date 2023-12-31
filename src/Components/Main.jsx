import ResponseData from "./ResponseData";
import React, { useState, useEffect } from "react";
import TypeAnimationComponent from "./TypeAnimationComponent";
import Wonder from "./Wonder";

const Main = ({ loading, response, images, cityName }) => {
  const [textColor, setTextColor] = useState("black");

  // Clear content when a new search is initiated
  useEffect(() => {
    if (!loading && !response) {
      setTextColor("black");
    }
  }, [loading, response]);

  return (
    <div className="mainContainer">
  
      <h1 className="text-4xl font-bold mb-4 text-[var(--text-light)] text-center">⭐️ Travel Planner ⭐️</h1>
      {!response && (
        <div className="text-base text-center text-[var(--text-light)] mb-8">
          <TypeAnimationComponent
            sequence={[
              500,
              "Fill the form to generate your itinerary",
              500,
            ]}
            speed={50}
            style={{ fontSize: "1em", color: "gray" }}
            repeat={Infinity}
          />
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center w-full">
          <TypeAnimationComponent
            sequence={[
              500,
              "Explore exotic destinations around the world",
              1000,
              () => setTextColor("aqua"),
              "Immerse yourself in diverse cultures and experiences",
              1000,
              () => setTextColor("deeppink"),
              "Create lasting memories with our personalized itineraries",
              1000,
              () => setTextColor("darkkhaki"),
              "Embark on a journey of a lifetime with Travel Planner",
              500,
              "Create lasting memories with our personalized itineraries",
              1000,
              () => setTextColor("red"),
              "Fill the form to generate your itinerary",
              500,
            ]}
            speed={50}
            style={{ fontSize: "2em", color: textColor }}
            repeat={Infinity}
          />
        </div>
      )}
      <div className="mt-8">
        {response && <ResponseData response={response} images={images} cityName={cityName} />}
      </div>
    </div>
  );
};

export default Main;
