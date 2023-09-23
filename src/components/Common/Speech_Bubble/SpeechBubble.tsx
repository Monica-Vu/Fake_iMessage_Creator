import React from "react";
import "./SpeechBubble.css";

interface SpeechBubbleProps {
  text: string;
  sender: boolean;
  hasTail?: boolean;
}

const SenderSpeechBubble: React.FC<SpeechBubbleProps> = ({ sender, text, hasTail }) => {
  return (
    <>
      <div className="speech-bubble-container">
        <div className="sender-speech-bubble speech-bubble">
          {text}
        </div>
      </div>
    </>
  );
};

const ReceiverSpeechBubble: React.FC<SpeechBubbleProps> = ({ sender, text, hasTail }) => {
  return (
    <>
      <div className="speech-bubble-container">
        <div className="receiver-speech-bubble speech-bubble">
          {text}
        </div>
      </div>
    </>
  );
};

export {
  SenderSpeechBubble,
  ReceiverSpeechBubble
}
