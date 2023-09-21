import './Chat.css';

type ChatProps = {
    chatRef: React.RefObject<HTMLDivElement>;
  };

const Chat: React.FC<ChatProps> = ({ chatRef }) => {
    return (
    <div className="capture-element" ref={chatRef}> 
    Download this section as a PNG
    </div>
    )

}

export default Chat;