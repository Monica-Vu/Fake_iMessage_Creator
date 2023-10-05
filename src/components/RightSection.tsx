import React, { useState } from "react";
import Button from "./Common/Button/Button";
import InputField from "./Common/Input_Field/InputField";
import FileUpload from './FileUpload/FileUpload';

const RightSection = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (newValue: string) => {
    setMessage(newValue);
  };

  const handleSendButtonSubmit = () => {
    console.log("SENDER SENT: ", message)
  }

  const handleReceivedButtonSubmit = () => {
    console.log("RECEIVER SENT:  ", message)
  }

  return (
    <div>
      <FileUpload />
      <InputField value={message} label={"Message"} onChange={handleMessageChange}/> 
      <Button text="Send" onClick={handleSendButtonSubmit}/>
      <Button text="Received" onClick={handleReceivedButtonSubmit}/>
    </div>
  );
};

export default RightSection;
