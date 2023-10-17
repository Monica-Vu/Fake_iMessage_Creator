import React, { useState } from 'react';
import './TextArea.css'

interface TextAreaProps {
  text: string;
  onChange: (newValue: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  text,
  onChange
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <textarea
      rows={5}
      cols={7}
      value={text}
      onChange={handleInputChange}
      placeholder="Enter message here" /> 
    );
}

export default TextArea