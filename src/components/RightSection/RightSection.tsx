import React, { useState, useRef, useEffect } from "react";
import Button from "../Common/Button/Button";
import MessagesContext, { MessagesType, Message } from "../../context/MessageContext/MessageContext";
import TextArea from "../Common/TextArea/TextArea";
import ProfilePictureUpload from '../ProfilePictureUpload/ProfilePictureUpload';
import "./RightSection.css"

const RightSection = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState('');
  const [imageAttachment, setImageAttachment] = useState<File | null>(null);
  const { messages, setMessages } = React.useContext(MessagesContext) as MessagesType

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

  const handleSendButtonSubmit = () => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      sender: true,
      ...(message && { text: message }),
      ...(imageAttachment && { image: imageAttachment })
      // text: message
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
      text: message
    }
    setMessages([
      ...messages || [],
      newMessage
    ])
    setMessage("")
  }

  return (
    <div>
      <h1 id="contactName">Contacts</h1>
      <ProfilePictureUpload />
      <TextArea text={message} onChange={handleMessageChange} />
      {imageAttachment && <img src={URL.createObjectURL(imageAttachment)} style={{width: "100px", height: "100px"}}/>}
      <Button text="Send" onClick={handleSendButtonSubmit} />
      <Button text="Received" onClick={handleReceivedButtonSubmit} />
      <Button text="Image" onClick={handleImageMessageSubmit} />
      <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".png, .jpg, .jpeg, .gif"
          style={{ display: "none" }}
        />
    </div>
  );
};

export default RightSection;
