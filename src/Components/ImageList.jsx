// ImageList.js
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ImageList = ({ images }) => {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-4 gap-2">
        {images.map((item, index) => (
             <div key={index} className="relative group">
          <PhotoView key={index} src={item}>
            <img src={item} alt=""  className="w-full h-full object-cover"/>
          </PhotoView>
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default ImageList;
