import ProfilePictureContext from "./components/Common/FileContext/FileContext";
import Grid from "./components/Grid/Grid";
import { useState } from "react";
import MessagesContext, { Message } from "./components/Common/MessageContext/MessageContext";
import {
  SHORT_SPEECH_TEXT,
  SHORT_SPEECH_TEXT_01,
} from "./constants";

const speechBubbles = [
  { sender: true, text: SHORT_SPEECH_TEXT },
  { sender: false, text: SHORT_SPEECH_TEXT_01 },
  { sender: true, text: "wow! so cool! 🫶" },
  { sender: true, text: "WOAH! so cool!!" },
  { sender: false, text: "My boo is amazing" },
  { sender: false, text: "My boo is talented!" },
];

function App() {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(speechBubbles);

  return (
    <ProfilePictureContext.Provider value={{ setProfilePicture, profilePicture }}>
    <MessagesContext.Provider value={{ setMessages, messages }}>
      <div className="App">
        <Grid />
      </div>
      </MessagesContext.Provider>
    </ProfilePictureContext.Provider>
  );
}

export default App;
