import React, { useState, useEffect } from "react";
import "react-image-crop/dist/ReactCrop.css";
import "./ImageCrop.css"
interface ImageCropProps {
  file?: File;
  width?: string;
  height?: string;
  borderRadius?: string;
  index?: number;
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky"; 
  top?: number,
  left?: number;
  multiPicture?: boolean;
}

function ImageCrop({ file, width, height, borderRadius, multiPicture, index, position, top, left }: ImageCropProps): JSX.Element {
  const imageStyle: React.CSSProperties = {
    width: width || "100%",
    height: height || "100%",
    borderRadius: borderRadius || "0%"
  }

  const multiPictureStyle: React.CSSProperties = {
    width: width || "100%",
    height: height || "100%",
    borderRadius: borderRadius || "0%",
    position: position || "absolute",
    // top: top + "px" || 0,
    top: top ? top + "px" : 0,
    left: left ? left + "px" : 0,
  }

  return file ? (
   
      <img
        src={URL.createObjectURL(file)}
        style={multiPicture? multiPictureStyle : imageStyle}
      />
  ) : <div> </div>
}

export default ImageCrop;
