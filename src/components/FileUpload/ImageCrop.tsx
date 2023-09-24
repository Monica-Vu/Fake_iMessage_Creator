import React, { useState, useEffect } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

interface ImageCropProps {
  file: File;
}

function ImageCrop({ file }: ImageCropProps): JSX.Element {
  const [crop, setCrop] = useState<Crop>({
    x: 0,
    y: 0,
    unit: "px",
    width: 63,
    height: 63,
  });
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  }, [file]);

  const handleCropChange = (newCrop: Crop) => {
    setCrop(newCrop);
  };

  return (
    <div>
      {image && (
        <ReactCrop crop={crop} onChange={handleCropChange} />
      )}
      <div>
        {image && (
          <img
            src={image}
            alt="Cropped iMessage Avatar"
            style={{
              width: "63px",
              height: "63px",
              borderRadius: "50%",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ImageCrop;
