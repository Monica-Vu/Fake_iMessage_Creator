import React from "react";
import SpeechBubble from "../Common/Speech_Bubble/SpeechBubble";
import "./Chat.css";
import {
  LONG_SPEECH_TEXT,
  SHORT_SPEECH_TEXT,
  SHORT_SPEECH_TEXT_01,
} from "../../constants";
import ProfilePictureContext, {
  ProfilePictureType,
} from "../Common/FileContext/FileContext";
import ImageCrop from "../FileUpload/ImageCrop";
import parkHanbinImage from "../../images/park_hanbin.png";

const speechBubbles = [
  { sender: true, text: SHORT_SPEECH_TEXT },
  { sender: false, text: SHORT_SPEECH_TEXT_01 },
  { sender: true, text: "WOAH! so cool! 🫶" },
  { sender: true, text: "WOAH! so cool!!" },
  { sender: false, text: "My boo is amazing" },
  { sender: false, text: "My boo is talented!" },
];

type ChatProps = {
  chatRef: React.RefObject<HTMLDivElement>;
};

const Chat: React.FC<ChatProps> = ({ chatRef }) => {
  const { profilePicture, setProfilePicture } = React.useContext(ProfilePictureContext) as ProfilePictureType;

  return (
    <div className="capture-element" ref={chatRef}>
      {profilePicture ? (
        <ImageCrop file={profilePicture} />
      ) : (
        <img
          src={parkHanbinImage}
          alt="Park Hanbin is a cutie"
          width="63px"
          height="63px"
        />
      )}
      {/* <SpeechBubble sender={true} text={SHORT_SPEECH_TEXT} />
      <SpeechBubble sender={false} text={SHORT_SPEECH_TEXT_01} />
      <SpeechBubble sender={true} text="woah, so cool!!" /> */}

      {speechBubbles.map((bubble, index) => {
        const removeTail = () => {
          if (index <= speechBubbles.length - 2) {
            if (
              speechBubbles[index].sender === speechBubbles[index + 1].sender
            ) {
              return true;
            }
          }
        };

        return (
          <SpeechBubble
            key={index}
            sender={bubble.sender}
            text={bubble.text}
            removeTail={removeTail()}
          />
        );
      })}
    </div>
  );
};

export default Chat;
