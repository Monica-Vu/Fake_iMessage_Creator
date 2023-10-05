import ProfilePictureContext from "./components/Common/FileContext/FileContext";
import Grid from "./components/Grid/Grid";
import { useState } from "react";
import MessagesContext, { Message } from "./components/Common/MessageContext/MessageContext";

function App() {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [messages, setMessages] = useState<Message[] | null>([]);

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
