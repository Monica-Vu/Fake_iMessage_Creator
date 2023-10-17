import React, { useState } from "react";
import Button from "./Common/Button/Button";
import InputField from "./Common/Input_Field/InputField";
import MessagesContext, { MessagesType, Message } from "./Common/MessageContext/MessageContext";
import TextArea from "./Common/TextArea/TextArea";
import ProfilePictureUpload from './ProfilePictureUpload/ProfilePictureUpload';

const RightSection = () => {
  const [contactName, setContactName] = useState('');
  const [message, setMessage] = useState('');
  const { messages, setMessages } = React.useContext(MessagesContext) as MessagesType

  const handleContactNameChange = (newValue: string) => {
    setContactName(newValue);
  };

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
      <ProfilePictureUpload />
      <InputField value={contactName} label={"contact name"} onChange={handleContactNameChange}/> 
      <TextArea text={message} onChange={handleMessageChange} /> 
      <Button text="Send" onClick={handleSendButtonSubmit}/>
      <Button text="Received" onClick={handleReceivedButtonSubmit}/>
    </div>
  );
};

export default RightSection;
