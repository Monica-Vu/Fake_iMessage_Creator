import React from "react";
import "./SpeechBubble.css";

interface SpeechBubbleProps {
  text: string;
  sender: boolean;
  removeTail?: boolean;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ sender, text, removeTail }) => {
  const className = sender ? 'sender-speech-bubble speech-bubble' : 'receiver-speech-bubble speech-bubble'
  console.log()
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