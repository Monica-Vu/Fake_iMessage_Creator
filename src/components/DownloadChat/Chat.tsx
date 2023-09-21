import SpeechBubble from '../Common/Speech_Bubble/SpeechBubble';
import './Chat.css';

type ChatProps = {
    chatRef: React.RefObject<HTMLDivElement>;
  };

const Chat: React.FC<ChatProps> = ({ chatRef }) => {
    return (
    <div className="capture-element" ref={chatRef}> 
    <SpeechBubble colour="#4D95F7" text="Hello"/>
    </div>
    )

}

export default Chat;