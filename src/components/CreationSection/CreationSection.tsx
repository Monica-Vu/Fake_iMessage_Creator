import React, { useState, useRef, useEffect } from "react";
import Button from "../Common/Button/Button";
import MessagesContext, { MessagesType, Message } from "../../context/MessageContext/MessageContext";
import TextArea from "../Common/TextArea/TextArea";
import ProfilePictureUpload from '../ProfilePictureUpload/ProfilePictureUpload';
import "./CreationSection.css"
import ImageCrop from "../ProfilePictureUpload/ImageCrop";
import InputField from "../Common/InputField/InputField";
import TimeContext, { TimeType } from "../../context/TimeContext/TimeContext";
import ContactsContext, {ContactType, Contact } from "../../context/Contacts/ContactsContext";
import CustomDropdown from "../Common/Dropdown/Dropdown";

const CreationSection = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState('');
  const [imageAttachment, setImageAttachment] = useState<File | null>(null);
  const { messages, setMessages, isEditing, setIsEditing } = React.useContext(MessagesContext) as MessagesType
  const { contacts, setContacts } = React.useContext(ContactsContext) as ContactType
  const { time, setTime } = React.useContext(TimeContext) as TimeType
  const [dateDivider, setDateDivision] = useState<string>("");

  const AddContactObject = () => {
    setContacts([
      ...contacts,
      { id: contacts.length, name: "" }
    ])
  }

  const handleImageMessageSubmit = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImageAttachment(file || null);
  };

  const handleMessageChange = (newValue: string) => {
    setMessage(newValue);
  };

  const handleTimeChange = (newValue: string) => {
    setTime(newValue);
  };

  const handleSendButtonSubmit = () => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      sender: true,
      ...(message && { text: message }),
      ...(imageAttachment && { image: imageAttachment })
    }
    setMessages([
      ...messages || [],
      newMessage
    ])
    setMessage("")
    setImageAttachment(null)
  }

  const handleReceivedButtonSubmit = () => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      sender: false,
      ...(message && { text: message }),
      ...(imageAttachment && { image: imageAttachment })
    }

    setMessages([
      ...messages || [],
      newMessage
    ])
    setMessage("")
    setImageAttachment(null)
  }

  const handleDateDividerSubmit = () => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      sender: false,
      ...(dateDivider && { date: dateDivider })
    }

    setMessages([
      ...messages || [],
      newMessage
    ])

    setDateDivision("")
  }

  const handleDateDividerChange = (newValue: string) => {
    setDateDivision(newValue);
  };

  const handleEditSubmit = () => {
    setIsEditing(!isEditing);
  }

  const handleSelectReceiver = (contactId: number) => {
    console.log(`contactId in handle`, contactId)
    const newMessage: Message = {
      id: crypto.randomUUID(),
      sender: false,
      contactId,
      ...(message && { text: message }),
      ...(imageAttachment && { image: imageAttachment }),
      // ...(contactId && { contactId: contacts[contactId].id })
      // ...(contactId && { contactId })
    }
    console.log("Creating new message", newMessage);

    setMessages([
      ...messages || [],
      newMessage
    ])
    setMessage("")
    setImageAttachment(null)
  }

// the custom dropdown is causing the height of the chat box to increase and i have no idea why
// there is no dropdown menu from React 
  return (
    <div>
      <h1 className="title">Message</h1>
      <TextArea text={message} onChange={handleMessageChange} />
      {imageAttachment && <ImageCrop file={imageAttachment} width="63px" height="63px" borderRadius="10%" />}
      <div className="left-item">
        <Button text="Send" onClick={handleSendButtonSubmit} margin="5px 0"/>
        <Button text="Received" onClick={handleReceivedButtonSubmit} />
        <CustomDropdown label="Receiver" id="ContactName" options={contacts} menuItemHandler={handleSelectReceiver} /> 
        <Button text="Image" onClick={handleImageMessageSubmit} margin="5px 0 5px 50px" colour="orange"/>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".png, .jpg, .jpeg, .gif"
          style={{ display: "none" }}
        />
      </div>

      <h1 className="title">Date Divider</h1>
      <InputField value={dateDivider} attribute="date divider" onChange={handleDateDividerChange} />
      <div className="left-item">
        <Button text="Submit" onClick={handleDateDividerSubmit} margin="5px 0px" />
      </div>
      <br />
      <div className="left-item">
        <Button text="Edit Mode" colour={"orange"} padding={"10px"} onClick={handleEditSubmit} margin="5px 0px" />
      </div>
      <h1 className="title">Contacts</h1>
      {contacts?.map(({id}) => <ProfilePictureUpload id={id} />)}
      <Button text="Add Contact" padding={"10px"} onClick={AddContactObject} /> 
      <h1 className="title">Current Time</h1>
      <InputField value={time} attribute="time" onChange={handleTimeChange} />
    </div>
  );
};

export default CreationSection;
