import React from "react";
import "./SpeechBubble.css";

interface SpeechBubbleProps {
  text: string;
  sender: boolean;
  hasTail?: boolean;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ sender, text, hasTail }) => {
  const className = sender ? 'sender-speech-bubble speech-bubble' : 'receiver-speech-bubble speech-bubble'
  
  return (
    <>
      <div className="speech-bubble-container">
        <div className={className}>
          {text}
        </div>
      </div>
    </>
  );
};

export default SpeechBubble