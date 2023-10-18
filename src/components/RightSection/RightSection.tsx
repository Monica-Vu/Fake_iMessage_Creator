import React, { useState } from "react";
import Button from "../Common/Button/Button";
import MessagesContext, { MessagesType, Message } from "../../context/MessageContext/MessageContext";
import TextArea from "../Common/TextArea/TextArea";
import ProfilePictureUpload from '../ProfilePictureUpload/ProfilePictureUpload';
import "./RightSection.css"

const RightSection = () => {
  const [message, setMessage] = useState('');
  const { messages, setMessages } = React.useContext(MessagesContext) as MessagesType

  const handleMessageChange = (newValue: string) => {
    setMessage(newValue);
  };

  const handleSendButtonSubmit = () => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      sender: true,
      text: message
    }
    setMessages([
      ...messages || [],
      newMessage
    ])
    setMessage("")
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
      <Button text="Send" onClick={handleSendButtonSubmit} />
      <Button text="Received" onClick={handleReceivedButtonSubmit} />
    </div>
  );
};

export default RightSection;
