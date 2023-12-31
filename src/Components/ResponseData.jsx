import React from "react";
import ReactMarkdown from "react-markdown";
import ImageList from "./ImageList";
import HotelPage from "./Hotel";

const ResponseData = ({ response, images, cityName }) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        🎉 Your travel plan is ready!
      </h2>
      <div className="mb-4">
        <div className="grid grid-cols-6 gap-4">
          {/* <ImageList images={images} /> */}
        </div>
        <ReactMarkdown className="text-gray-800">{response}</ReactMarkdown>
      </div>
      <HotelPage cityName={cityName} />
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => {
            const blob = new Blob([response], {
              type: "text/plain;charset=utf-8",
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", "travel-plan.txt");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            return false;
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default ResponseData;
