import React from "react";
import "./SpeechBubble.css";

interface SpeechBubbleProps {
  colour?: string;
  hasTail?: boolean;
  text: string;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ colour, text }) => {
  return (
    <>
      <div className="speech-bubble-container">
        <div className="speech-bubble" style={{ backgroundColor: colour }}>
          {text}
        </div>
      </div>
    </>
  );
};

export default SpeechBubble;
