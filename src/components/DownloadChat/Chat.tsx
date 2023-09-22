import SpeechBubble from "../Common/Speech_Bubble/SpeechBubble";
import "./Chat.css";
import {
  SENDER_SPEECH_BUBBLE_CLASS_NAME,
  RECEIVER_SPEECH_BUBBLE_CLASS_NAME,
} from "../../constants";
// import greySpeechBubbleTail from '../../svgs/grey_speech_bubble_tail.png';

type ChatProps = {
  chatRef: React.RefObject<HTMLDivElement>;
};

const Chat: React.FC<ChatProps> = ({ chatRef }) => {
  return (
    <div className="capture-element" ref={chatRef}>
      <SpeechBubble
        sender={true}
        text="Hello <3"
      />
      {/* <SpeechBubble
        className={RECEIVER_SPEECH_BUBBLE_CLASS_NAME}
        text="Hi there! **"
      /> */}
     
    </div>
  );
};

export default Chat;
