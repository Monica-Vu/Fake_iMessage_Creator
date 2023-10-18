import React, { useState, useEffect } from "react";
import "react-image-crop/dist/ReactCrop.css";
import "./ImageCrop.css"

interface ImageCropProps {
  file: File;
  width?: string;
  height?: string;
  borderRadius?: string;
  left?: string;
}

function ImageCrop({ file, width, height, borderRadius, left }: ImageCropProps): JSX.Element {
  const imageStyle: React.CSSProperties = {
    width: width|| "100%",
    height: height || "100%",
    borderRadius: borderRadius || "0%",
  }
  
  return (
    <div>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            style={imageStyle}
          />
        )}
    </div>
  );
}

export default ImageCrop;
