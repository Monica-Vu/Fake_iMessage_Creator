import React, { useRef } from "react";
import ImageCrop from "./ImageCrop";
import Button from "../Common/Button/Button";
import ProfilePictureContext, { ProfilePictureType } from "../Common/FileContext/FileContext";
import "./ProfilePictureUpload.css"

function ProfilePictureUpload() {
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
      <h1> Contact Photo </h1>
      {profilePicture ? (
        <ImageCrop file={profilePicture} />
      ) : (<h6> No Profile Picture </h6>)}
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

export default ProfilePictureUpload;
