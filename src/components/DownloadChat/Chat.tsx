import SpeechBubble from '../Common/Speech_Bubble/SpeechBubble';
import './Chat.css';

type ChatProps = {
    chatRef: React.RefObject<HTMLDivElement>;
  };

const Chat: React.FC<ChatProps> = ({ chatRef }) => {
    return (
    <div className="capture-element" ref={chatRef}> 
    <SpeechBubble className="sender-speech-bubble" text="Hello"/>
    <SpeechBubble className="receiver-speech-bubble" text="Hi there!"/>
    </div>
    )

}

export default Chat;