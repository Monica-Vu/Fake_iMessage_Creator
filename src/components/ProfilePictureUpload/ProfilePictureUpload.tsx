import React, { useRef } from "react";
import ImageCrop from "./ImageCrop";
import Button from "../Common/Button/Button";
import ProfilePictureContext, { ProfilePictureType } from "../../context/FileContext/FileContext";
import "./ProfilePictureUpload.css"
import ContactNameContext, { ContactNameType } from "../../context/ContactNameContext/ContactNameContext";
import InputField from "../Common/Input_Field/InputField";

function ProfilePictureUpload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { profilePicture, setProfilePicture } = React.useContext(ProfilePictureContext) as ProfilePictureType;
  const { contactName, setContactName } = React.useContext(ContactNameContext) as ContactNameType

  const handleContactNameChange = (newValue: string) => {
    setContactName(newValue);
  };

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
    <div className="flex-grid">
      <div className="col">
        {profilePicture ? (
          <ImageCrop file={profilePicture} />
        ) : (<h6> No Profile Picture </h6>)}
        <div className="col"> 
        <Button text="Upload" onClick={handleButtonClick} />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".png, .jpg, .jpeg, .gif"
          style={{ display: "none" }}
        />
        </div>
      </div>
      <div className="col">
        <InputField value={contactName} attribute="contact name" onChange={handleContactNameChange} />
      </div>
    </div>
  );
}

export default ProfilePictureUpload;
