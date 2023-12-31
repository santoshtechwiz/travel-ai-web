import React from "react";

const LanguageChip = ({ option, selected, onClick }) => (
  <div
    onClick={() => onClick(option)}
    className={`inline-flex items-center px-3 py-1 border border-gray-300 mb-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${selected ? 'bg-blue-500 text-white' : 'bg-white'}`}
  >
    <span role="img" aria-label={option.label}>
      {option.icon}
    </span>
  </div>
);

export default LanguageChip;
