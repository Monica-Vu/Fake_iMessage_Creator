import React, { useEffect, useRef } from "react";
import SpeechBubble from "../Common/Speech_Bubble/SpeechBubble";
import "./Chat.css";
import ProfilePictureContext, {
  ProfilePictureType,
} from "../../context/FileContext/FileContext";
import ImageCrop from "../ProfilePictureUpload/ImageCrop";
import MessagesContext, { MessagesType } from "../../context/MessageContext/MessageContext";
import ContactNameContext, { ContactNameType } from "../../context/ContactNameContext/ContactNameContext";
import TimeContext, { TimeType } from "../../context/TimeContext/TimeContext";
import ContactsContext, { ContactType, Contact } from "../../context/Contacts/ContactsContext";

import barsImage from "../../images/bars.png";
import wifiImage from "../../images/wifi.png"
import batteryImage from "../../images/battery.png"

import backArrowImage from "../../images/Back_Arrow.svg"
import unknownPersonImage from "../../images/unknown_person.svg";
import moreArrowImage from "../../images/More_Arrow.svg"

import CameraImage from "../../images/Camera.svg"
import AppIconImage from "../../images/App.svg"
import ChatImage from "../../images/Chat.svg"
import EditList from "../EditList/EditList";

type ChatProps = {
  chatRef: React.RefObject<HTMLDivElement>;
};

const Chat: React.FC<ChatProps> = ({ chatRef }) => {
  const { profilePicture } = React.useContext(ProfilePictureContext) as ProfilePictureType;
  const { messages, isEditing, setIsEditing } = React.useContext(MessagesContext) as MessagesType;
  const { contactName } = React.useContext(ContactNameContext) as ContactNameType;
  const { contacts } = React.useContext(ContactsContext) as ContactType
  const { time } = React.useContext(TimeContext) as TimeType;
  const contactsLengthGreaterThanOne = contacts.length > 1;
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages?.length) {
      chatEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      })
    }
  }, [messages?.length]);


  if (isEditing) {
    return <EditList />
  }

  const contactImageStyle: React.CSSProperties = {
    transform: `translate(-${(((contacts.length - 1) * 30 + (63 / 2)) / 3) + (contacts.length * 0.70)}px, 0)`
  }

  return (
    <div className="capture-element" ref={chatRef}>
      <div id="header-container">
        <div className="left">
          <h6 id="time"> {time}</h6>
        </div>
        <div className="right">
          <img src={barsImage} width="15px" height="12px" alt="signal-strength" />
          <img src={wifiImage} width="16px" height="12px" alt="wifi" />
          <img src={batteryImage} width="21px" height="12px" alt="battery" />
        </div>
      </div>
      <div id="contact">
        <div id="arrow" style={{ paddingTop: "15px" }}>
          <img src={backArrowImage} alt="back-arrow" width="35px" height="35px" />
        </div>
        <div id="contact-image" style={contactImageStyle}>

          {contacts.slice(0, 7).map((contact, index) => {
            const position = index === 0 ? "relative" : undefined;
            const left = index === 0 ? 0 : index * 30;

            return contact.image ?
              <ImageCrop file={contact.image} width="63px" height="63px" borderRadius="50%" multiPicture={contacts.length > 1} position={position} left={left} />
              :
              (<img
                src={unknownPersonImage}
                alt="Unknown Person"
                width="63px"
                height="63px"
                border-radius="50%" />);
          })}
        </div>

      </div>
      
      <p id="contact-name"> {contactsLengthGreaterThanOne ? contactName : contacts[0].name }  <img src={moreArrowImage} alt="more-arrow" height="12px" width="12px" /> </p>
      

      <div id="chat">
        {messages?.map((bubble, index) => {
          const removeTail = () => {
            if (index <= messages.length - 2) {
              if (messages[index].hasOwnProperty("text") &&
                messages[index + 1].hasOwnProperty("text")
              ) {
                if (messages[index].sender === messages[index + 1].sender) {
                  if (messages[index].sender) {
                    return true
                  } else {
                    if (messages[index + 1].contactId === messages[index].contactId) {
                      return true
                    } else {
                      return false
                    }
                  }
                }
              }
            }
            return false;
          };

          const removeName = () => {
            if (index >= 1 && contactsLengthGreaterThanOne) {
              if (messages[index]?.contactId === messages[index - 1]?.contactId) {
                return true
              } else {
                return false
              }
            }
          }

          const removePfpForImages = () => {
            if (index >= 1 && contactsLengthGreaterThanOne && index <= messages.length - 2) {
              if (messages[index]?.contactId === messages[index + 1]?.contactId) {
                return true
              } else {
                return false
              }
            }
          }

          const contactIdExists = bubble.contactId != null

          if (bubble.image) {
            if (bubble.sender) {
              return <div key={bubble.id} className="right"><ImageCrop file={bubble.image} width="30%" height="30%" borderRadius="20%" /></div>
            } else {
              if (contactsLengthGreaterThanOne) {
                return (
                  <div className="messageContainer">
                    <div className="messagePfp">
                      {contactIdExists && <ImageCrop file={contacts[bubble.contactId || 0].image} width="38px" height="38px" borderRadius="100%" visibility={removePfpForImages() ? "hidden" : "visible"}/>}
                    </div>
                    <div className="context">
                      {contactIdExists &&  !removeName() && <p className="contactsName"> {contacts[bubble.contactId || 0].name} </p>}
                      <div key={bubble.id} className="left"><ImageCrop file={bubble.image} width="30%" height="30%" borderRadius="20%" /></div>
                    </div>
                  </div>
                )
              } else {
                return (<div key={bubble.id} className="left"><ImageCrop file={bubble.image} width="30%" height="30%" borderRadius="20%" /></div>)
              }
            }
          }

          if (bubble.text) {
            if (contactsLengthGreaterThanOne && (!bubble.sender)) {
              return (
                <>
                  <div className="messageContainer">
                    <div className="messagePfp">
                      {contactIdExists && <ImageCrop file={contacts[bubble.contactId || 0].image} width="38px" height="38px" borderRadius="100%" visibility={(removeTail()) ? "hidden" : "visible"} />}
                    </div>
                    <div className="context">
                      {contactIdExists && !removeName() && <p className="contactsName"> {contacts[bubble.contactId || 0].name} </p>}
                      <SpeechBubble
                        key={index}
                        sender={bubble.sender}
                        text={bubble.text}
                        removeTail={removeTail()}
                      />
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <SpeechBubble
                    key={index}
                    sender={bubble.sender}
                    text={bubble.text}
                    removeTail={removeTail()}
                  />
                </>
              )
            }
          }

          if (bubble.date) {
            return (<h6 key={bubble.id} className="time-divider">{bubble.date}</h6>)
          }
        })}

        <div ref={chatEndRef} /> 
      </div>
      <div id="footer">
        <img src={CameraImage} />
        <img src={AppIconImage} />
        <img src={ChatImage} />
      </div>
    </div>
  );
};

export default Chat;
