import React from "react";
import "./SpeechBubble.css";
import greySpeechBubbleTail from '../../../svgs/grey_speech_bubble_tail.png';
import blueSpeechBubbleTail from '../../../svgs/blue_speech_bubble.png';

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
        <img src={blueSpeechBubbleTail} alt="Tail" className="tail-image" />
      </div>
    </>
  );
};

export default SpeechBubble;
