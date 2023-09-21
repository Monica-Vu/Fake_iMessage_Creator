import React from "react";
import "./SpeechBubble.css";

interface SpeechBubbleProps {
  text: string;
  className: string;
  hasTail?: boolean;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ className, text }) => {
  return (
    <>
      <div className="speech-bubble-container">
        <div className={`my-element ${className}`}>
          {text}
        </div>
      </div>
    </>
  );
};

export default SpeechBubble;
