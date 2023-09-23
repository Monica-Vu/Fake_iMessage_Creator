import SpeechBubble from "../Common/Speech_Bubble/SpeechBubble";
import "./Chat.css";
import { LONG_SPEECH_TEXT, SHORT_SPEECH_TEXT, SHORT_SPEECH_TEXT_01 } from "../../constants";

type ChatProps = {
  chatRef: React.RefObject<HTMLDivElement>;
};

const Chat: React.FC<ChatProps> = ({ chatRef }) => {
  return (
    <div className="capture-element" ref={chatRef}>
      <SpeechBubble sender={true} text={SHORT_SPEECH_TEXT} />
      <SpeechBubble sender={false} text={SHORT_SPEECH_TEXT_01} />
      <SpeechBubble sender={true} text="woah, so cool!!" />
    </div>
  );
};

export default Chat;
