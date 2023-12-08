import React, { useState, useEffect } from "react";
import "react-image-crop/dist/ReactCrop.css";
import "./ImageCrop.css"
import { visibility } from "html2canvas/dist/types/css/property-descriptors/visibility";
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
  visibility?:"visible" | "hidden" | "collapse" | "inherit"
}

function ImageCrop({ file, width, height, borderRadius, multiPicture, index, position, top, left, visibility }: ImageCropProps): JSX.Element {
  const imageStyle: React.CSSProperties = {
    width: width || "100%",
    height: height || "100%",
    borderRadius: borderRadius || "0%",
    visibility: visibility || "visible",
    position: "relative"
  }

  const multiPictureStyle: React.CSSProperties = {
    width: width || "100%",
    height: height || "100%",
    borderRadius: borderRadius || "0%",
    position: position || "absolute",
    top: top ? top + "px" : 0,
    left: left ? left + "px" : 0,
  }

  return file ? (
  
      <img
        src={URL.createObjectURL(file)}
        style={multiPicture? multiPictureStyle : imageStyle}
      />
  ) : <> </>
}

export default ImageCrop;
