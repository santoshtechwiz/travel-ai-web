import React from "react";
import LocationButtons from "./LocationButtons";
import Interests from "./Interests";
import CuisineTypes from "./CuisineTypes";

import LanguageChip from "./LanguageChip";
import GenerateButton from "./Button";

const Form = ({
  values,
  handleChange,
  handleMultiSelectChange,
  handleLocationClick,
  handleInterestClick,
  handleCuisineTypeClick,
  options,
  selectedInterests,
  selectedCuisineTypes,
  topLocations,
  handleSubmit,
  loading,
}) => {
  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <label htmlFor="destinationCountry">Destination Country</label>
      <input
        type="text"
        placeholder="e.g. San Francisco/USA, Paris/France, Istanbul/Turkey, etc."
        id="destinationCountry"
        name="destinationCountry"
        value={values.destinationCountry}
        onChange={handleChange}
        required
      />
      
      {/* Location Buttons */}
      <LocationButtons
        topLocations={topLocations}
        handleLocationClick={handleLocationClick}
      />
      
      {/* Budget Input */}
      <div className="mb-4">
        <label
          htmlFor="budget"
          className="block text-sm font-medium text-gray-700"
        >
          Budget
          <span className="ml-1 inline-block text-xs text-gray-500">
            (with currency)
          </span>
        </label>
        <input
          type="text"
          id="budget"
          name="budget"
          value={values.budget}
          onChange={handleChange}
          placeholder="e.g. $1000 USD, 1000 EUR, etc."
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      
      {/* Trip Duration Input */}
      <div className="mb-4">
        <label
          htmlFor="tripDuration"
          className="block text-sm font-medium text-gray-700"
        >
          Trip Duration
          <span className="ml-1 inline-block text-xs text-gray-500">
            (in days)
          </span>
        </label>
        <input
          type="number"
          id="tripDuration"
          name="tripDuration"
          value={values.tripDuration}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      
      {/* Interests Component */}
      <Interests
        options={options}
        selectedInterests={selectedInterests}
        handleInterestClick={handleInterestClick}
      />
      
      {/* Accommodation Type Dropdown */}
      <div>
        <label htmlFor="accommodationType">Accommodation</label>
        <select
          id="accommodationType"
          name="accommodationType"
          value={values.accommodationType}
          onChange={handleChange}
        >
          {options.accommodationTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      
      {/* Travel Style Dropdown */}
      <div>
        <label htmlFor="travelStyle">Travel Style</label>
        <select
          id="travelStyle"
          name="travelStyle"
          value={values.travelStyle}
          onChange={handleChange}
        >
          {options.travelStyles.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      
      {/* Transportation Type Input */}
      <div>
        <label htmlFor="transportationType">
          Transportation Type
          <p
            style={{
              display: "inline-block",
              fontSize: "10px",
              color: "#666",
            }}
          >
            (e.g. car, train, bus, etc.)
          </p>
        </label>
        <input
          type="text"
          id="transportationType"
          name="transportationType"
          value={values.transportationType}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* Activity Type Dropdown (Multi-Select) */}
      <div>
        <label htmlFor="activityType">
          Activity Type
          <p
            style={{
              display: "inline-block",
              fontSize: "10px",
              color: "#666",
            }}
          >
            (select multiple options)
          </p>
        </label>
        <select
          id="activityType"
          name="activityType"
          multiple
          value={values.activityType}
          onChange={handleMultiSelectChange}
        >
          {options.activityTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      
      {/* Cuisine Type Component */}
      <CuisineTypes
        options={options}
        selectedCuisineTypes={selectedCuisineTypes}
        handleCuisineTypeClick={handleCuisineTypeClick}
      />
      
      {/* Language Chips */}
      <div>
        <label>Language</label>
        <div className="flex flex-wrap text-2xl">
          {options.languages.map((option) => (
            <LanguageChip
              key={option.value}
              option={option}
              selected={values.language === option.value}
              onClick={() => handleLanguageClick(option)}
            />
          ))}
        </div>
      </div>
      
      {/* Generate Button */}
      <GenerateButton
        loading={loading}
        type="submit"
        disabled={loading}
        className={loading ? "loading" : ""}
      ></GenerateButton>
    </form>
  );
};

export default Form;
