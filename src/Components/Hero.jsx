import React from 'react';

const Hero = () => {
  return (
    <div className="pt-60 flex items-center px-10">
      <div className="w-[450px]">
        <div className="grid gap-4">
          <h2>AI-Based Travel Plan Generator</h2>
          <p>
            Welcome to our AI-based travel plan generator! We leverage advanced
            artificial intelligence technology to help you create personalized
            and exciting travel itineraries.
          </p>
          <h3>Advantages</h3>
          <ul>
            <li>
              <strong>Personalized Recommendations:</strong> Our AI analyzes your
              preferences and provides tailored recommendations for destinations,
              activities, and more.
            </li>
            <li>
              <strong>Efficiency:</strong> Quickly generate detailed travel plans
              saving you time in researching and planning.
            </li>
            <li>
              <strong>Budget-Friendly Options:</strong> Receive suggestions that
              match your budget constraints for accommodations, transportation,
              and activities.
            </li>
            <li>
              <strong>Rich Itinerary Details:</strong> Get daily recommendations
              for destinations, activities, and dining options with comprehensive
              details.
            </li>
            <li>
              <strong>Multilingual Support:</strong> Plan your trip in your
              preferred language with multilingual support.
            </li>
          </ul>
          <p>
            Whether you're a seasoned traveler or planning your first adventure,
            our AI travel planner is here to make your journey memorable and
            stress-free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
