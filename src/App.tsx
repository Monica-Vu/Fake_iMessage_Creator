import ProfilePictureContext from "./context/FileContext/FileContext";
import Grid from "./components/Grid/Grid";
import { useState } from "react";
import MessagesContext, { Message } from "./context/MessageContext/MessageContext";
import ContactNameContext from "./context/ContactNameContext/ContactNameContext";
import TimeContext from "./context/TimeContext/TimeContext";

function App() {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [messages, setMessages] = useState<Message[] | null>([]);
  const [contactName, setContactName ] = useState<string | "">("");
  const [time, setTime] = useState<string>("12:00PM")

  return (
    <TimeContext.Provider value={{ time, setTime}}>
    <ContactNameContext.Provider value={{ contactName, setContactName }}> 
    <ProfilePictureContext.Provider value={{ setProfilePicture, profilePicture }}>
    <MessagesContext.Provider value={{ setMessages, messages }}>
      <div className="App">
        <Grid />
      </div>
      </MessagesContext.Provider>
    </ProfilePictureContext.Provider>
    </ContactNameContext.Provider> 
    </TimeContext.Provider>
  );
}

export default App;
