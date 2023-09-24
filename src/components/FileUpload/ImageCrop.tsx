import React, { useState, useEffect } from "react";
import "react-image-crop/dist/ReactCrop.css";

interface ImageCropProps {
  file: File;
}

function ImageCrop({ file }: ImageCropProps): JSX.Element {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  }, [file]);

  return (
    <div>
        {image && (
          <img
            src={image}
            style={{
              width: "63px",
              height: "63px",
              borderRadius: "50%"
            }}
          />
        )}
    </div>
  );
}

export default ImageCrop;
