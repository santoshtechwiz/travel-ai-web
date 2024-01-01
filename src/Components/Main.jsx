import ResponseData from "./ResponseData";
import React, { useState, useEffect } from "react";
import TypeAnimationComponent from "./TypeAnimationComponent";
import Wonder from "./Wonder";
import KlookAffiliateWidget from "./KlookAffiliateWidget";

const Main = ({ loading, response, images, cityName }) => {
  const [textColor, setTextColor] = useState("black");

  const loadingMessages = [
    "Connecting to server...",
    "Crafting your deals...",
    "Please wait...",
    "Almost there...",
    "Grabbing a map and a compass...",
    "Training carrier pigeons for faster delivery...",
    "Assembling a team of travel gnomes...",
    "Summoning the travel spirits...",
    "Sending a postcard to your inbox...",
    "Bribing the weather gods for perfect travel conditions...",
  ];
  
  const getRandomLoadingMessage = () => {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    return loadingMessages[randomIndex];
  };

  // Clear content when a new search is initiated
  useEffect(() => {
    if (!loading && !response) {
      setTextColor("black");
    }
  }, [loading, response]);

  return (
    <div className="mainContainer">
      <h1 className="text-4xl font-bold mb-4 text-[var(--text-light)] text-center">Travel Planner</h1>
      {!response && (
        <div className="text-base text-center text-[var(--text-light)] mb-8">
          <TypeAnimationComponent
            sequence={[500, "Fill the form to generate your itinerary", 500]}
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
              getRandomLoadingMessage(),
              1000,
              () => setTextColor("aqua"),
              getRandomLoadingMessage(),
              1000,
              () => setTextColor("deeppink"),
              getRandomLoadingMessage(),
              1000,
              () => setTextColor("darkkhaki"),
              getRandomLoadingMessage(),
              1000,
              () => setTextColor("red"),
              getRandomLoadingMessage(),
              500,
            ]}
            speed={50}
            style={{ fontSize: "2em", color: textColor }}
            repeat={Infinity}
          />
        </div>
      )}
      <div className="mt-8">
        <div className="flex flex-col gap-2">
          <KlookAffiliateWidget></KlookAffiliateWidget>
        </div>
        {response && <ResponseData response={response} images={images} cityName={cityName} />}
      </div>
    </div>
  );
};

export default Main;
