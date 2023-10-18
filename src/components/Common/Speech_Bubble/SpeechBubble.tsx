import React from "react";
import "./SpeechBubble.css";

interface SpeechBubbleProps {
  text?: string;
  sender: boolean;
  removeTail?: boolean;
  image?: any
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ sender, text, removeTail, image }) => {
  const className = sender ? 'sender-speech-bubble speech-bubble' : 'receiver-speech-bubble speech-bubble'
  return (
    <>
      <div className="speech-bubble-container">
        <div className={className + (removeTail ? '.hide-tail' : '')}>
          {text}
        </div>
      </div>
    </>
  );
};

export default SpeechBubble