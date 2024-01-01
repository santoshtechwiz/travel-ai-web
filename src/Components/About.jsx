import React from "react";
import Traverller from "../assets/Traveller.png";
import DecoreLine from "../assets/Decore_line.png";

const About = () => {
  return (
    <div className="pt-60 flex items-center px-10">
      <div className="w-[450px]">
        <div className="grid gap-4">
          <div className="grid gap-4">
            <span className="text-redText font-bold text-2xl">
              Best Destinations around the world
            </span>
            <span className="font-bold text-6xl text-purpleText z-50">
              Travel, enjoy and live a new and full life
            </span>
            <img
              src={DecoreLine}
              className="absolute top-[400px] left-[430px] h-[12px] w-[300px]"
              alt=""
            />
          </div>
          <div>
            <span className="text-lightPurpleText">
              Welcome to our AI-based travel plan generator! We leverage
              advanced artificial intelligence technology to help you create
              personalized and exciting travel itineraries.
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="/plan"
              className="px-4 py-2.5 rounded-md bg-yellowColor text-textWhite"
            >
              PLAN YOUR TRIP
            </a>
            <div className="flex items-center space-x-3">
              <div className="rounded-full  bg-buttonColor p-2  text-textWhite">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute top-20 right-40">
          <img src={Traverller} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
