import React from "react";
import SpeechBubble from "../Common/Speech_Bubble/SpeechBubble";
import "./Chat.css";
import ProfilePictureContext, {
  ProfilePictureType,
} from "../Common/FileContext/FileContext";
import ImageCrop from "../ProfilePictureUpload/ImageCrop";
import defaultImage from "../../images/unknown_person.png";
import MessagesContext, { MessagesType } from "../Common/MessageContext/MessageContext";

type ChatProps = {
  chatRef: React.RefObject<HTMLDivElement>;
};

const Chat: React.FC<ChatProps> = ({ chatRef }) => {
  const { profilePicture } = React.useContext(ProfilePictureContext) as ProfilePictureType;
  const { messages } = React.useContext(MessagesContext) as MessagesType

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
      
      {messages?.map((bubble, index) => {
        const removeTail = () => {
          if (index <= messages.length - 2) {
            if (
              messages[index].sender === messages[index + 1].sender
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
