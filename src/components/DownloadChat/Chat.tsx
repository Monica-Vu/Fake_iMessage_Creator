import { SenderSpeechBubble, ReceiverSpeechBubble } from "../Common/Speech_Bubble/SpeechBubble";
import "./Chat.css";
import { LONG_SPEECH_TEXT, SHORT_SPEECH_TEXT, SHORT_SPEECH_TEXT_01 } from "../../constants";

type ChatProps = {
  chatRef: React.RefObject<HTMLDivElement>;
};

const Chat: React.FC<ChatProps> = ({ chatRef }) => {
  return (
    <div className="capture-element" ref={chatRef}>
      <SenderSpeechBubble sender={true} text={SHORT_SPEECH_TEXT} />
      <ReceiverSpeechBubble sender={false} text={SHORT_SPEECH_TEXT_01} />
      <SenderSpeechBubble sender={true} text="woah, so cool" />
    </div>
  );
};

export default Chat;
