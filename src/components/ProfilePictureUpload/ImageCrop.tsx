import React, { useState, useEffect } from "react";
import "react-image-crop/dist/ReactCrop.css";
import "./ImageCrop.css"

interface ImageCropProps {
  file?: File;
  width?: string;
  height?: string;
  borderRadius?: string;
  left?: string;
}

function ImageCrop({ file, width, height, borderRadius, left }: ImageCropProps): JSX.Element {
  const imageStyle: React.CSSProperties = {
    width: width || "100%",
    height: height || "100%",
    borderRadius: borderRadius || "0%",
  }

  return file ? (
    <div className="parent">
      <img
        src={URL.createObjectURL(file)}
        className="image one"
      />
      <img
        src={URL.createObjectURL(file)}
        className="image two"
      />
      <img
        src={URL.createObjectURL(file)}
        className="image three"
      />
      <img
        src={URL.createObjectURL(file)}
        className="image four"
      />
      <img
        src={URL.createObjectURL(file)}
        className="image five"
      />
      <img
        src={URL.createObjectURL(file)}
        className="image six"
      />
      <img
        src={URL.createObjectURL(file)}
        className="image seven"
      />
      <img
        src={URL.createObjectURL(file)}
        className="image eight"
      />
      {/* <img
        src={URL.createObjectURL(file)}
        className="image nine"
      />
      <img
        src={URL.createObjectURL(file)}
        className="image ten"
      /> */}
    </div>
  ) : <div> </div>
}

export default ImageCrop;
