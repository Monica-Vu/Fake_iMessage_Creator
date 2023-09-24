import React from "react";
import SpeechBubble from "../Common/Speech_Bubble/SpeechBubble";
import "./Chat.css";
import {
  SHORT_SPEECH_TEXT,
  SHORT_SPEECH_TEXT_01,
} from "../../constants";
import ProfilePictureContext, {
  ProfilePictureType,
} from "../Common/FileContext/FileContext";
import ImageCrop from "../FileUpload/ImageCrop";
import defaultImage from "../../images/unknown_person.png";

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
  const { profilePicture } = React.useContext(ProfilePictureContext) as ProfilePictureType;

  return (
    <div className="capture-element" ref={chatRef}>
      {profilePicture ? (
        <ImageCrop file={profilePicture} />
      ) : (
        <img
          src={defaultImage}
          alt="Unknown Person"
          width="63px"
          height="63px"
          border-radius="50%"
        />
      )}

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
