import React, { useRef, useState } from "react";
import ImageCrop from "./ImageCrop";
import parkHanbinImage from "../../images/park_hanbin.png";
import Button from "../Common/Button/Button";
import ProfilePictureContext, { ProfilePictureType } from "../Common/FileContext/FileContext";

function FileUpload() {
  const defaultImage = parkHanbinImage;
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { profilePicture, setProfilePicture } = React.useContext(ProfilePictureContext) as ProfilePictureType;

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setProfilePicture(file || null);
  };

  return (
    <div>
      {profilePicture ? (
        <ImageCrop file={profilePicture} />
      ) : (
        <img src={parkHanbinImage} alt="Park Hanbin is a cutie" width="63px" height="63px" />
      )}
      <br />
      <Button text="Upload" onClick={handleButtonClick} />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".png, .jpg, .jpeg, .gif"
        style={{ display: "none" }}
      />
    </div>
  );
}

export default FileUpload;
