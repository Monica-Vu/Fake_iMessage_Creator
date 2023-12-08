import React, { useRef } from "react";
import ImageCrop from "./ImageCrop";
import Button from "../Common/Button/Button";
import ProfilePictureContext, { ProfilePictureType } from "../../context/FileContext/FileContext";
import "./ProfilePictureUpload.css"
import ContactNameContext, { ContactNameType } from "../../context/ContactNameContext/ContactNameContext";
import InputField from "../Common/InputField/InputField";
import ContactsContext, { ContactType } from "../../context/Contacts/ContactsContext";
import unknownPersonImage from "../../images/unknown_person.svg";

type ProfilePictureProps = {
  id: number
}

const ProfilePictureUpload: React.FC<ProfilePictureProps> = ({ id }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { profilePicture, setProfilePicture } = React.useContext(ProfilePictureContext) as ProfilePictureType;
  const { contactName, setContactName } = React.useContext(ContactNameContext) as ContactNameType
  const { contacts, updateImage, updateName } = React.useContext(ContactsContext) as ContactType

  const handleContactNameChange = (newValue: string) => {
    updateName(id, newValue);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      console.log("Profile Picture Upload")
      updateImage(id, file);
    }
  };

  const doesImage = contacts[id].image

  return (
    <div className="flex-grid">
      <div className="col">
        {doesImage ? (
          <ImageCrop file={doesImage} width="63px" height="63px" borderRadius="50%" />
        ) : (<img
        src={unknownPersonImage}
        alt="Unknown Person"
        width="63px"
        height="63px"
        border-radius="50%"
      />)}
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
        <InputField value={contacts[id].name} attribute="contact name" onChange={handleContactNameChange} />
      </div>
    </div>
  );
}

export default ProfilePictureUpload;
