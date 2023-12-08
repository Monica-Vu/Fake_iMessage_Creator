import ProfilePictureContext from "./context/FileContext/FileContext";
import Grid from "./components/Grid/Grid";
import { useState } from "react";
import MessagesContext, { Message } from "./context/MessageContext/MessageContext";
import ContactNameContext from "./context/ContactNameContext/ContactNameContext";
import TimeContext from "./context/TimeContext/TimeContext";
import ContactsContext, { Contact }  from "./context/Contacts/ContactsContext";
import "./App.css"

function App() {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[] | null>([]);
  const [contactName, setContactName ] = useState<string | "">("");     
  const [contacts, setContacts] = useState<Contact[] | []>([{ id: 0, name: "" }]); 
  const [time, setTime] = useState<string>("12:00PM")

  const updateImage = (id: number, image: File) => {
    setContacts(contacts.map(contact => {
      if (contact.id === id) {
        return {...contact, image: image};
      } else {
        return contact;
      }
    }))
  }

  const updateName = (id: number, name: string) => {
    setContacts(contacts.map(contact => {
      if (contact.id === id) {
        return {...contact, name: name};
      } else {
        return contact;
      }
    }))
  }

  return (
    <TimeContext.Provider value={{ time, setTime}}>
    <ContactsContext.Provider value={{ contacts, setContacts, updateImage, updateName }}> 
    <ContactNameContext.Provider value={{ contactName, setContactName }}> 
    <ProfilePictureContext.Provider value={{ setProfilePicture, profilePicture }}>
    <MessagesContext.Provider value={{ setMessages, messages, isEditing, setIsEditing }}>
      <div className="App">
        <Grid />
        <p> Copyright © 2023 FakeChatCreator 
          <br /> <br /> 

        FakeChatCreator is not affiliated with Apple, iPhone, iMessage, or iPhone Text Messages or responsible for any user generated content.
        <br /> 
        Please only use this for creating fictional stories (ex/ smau, text scenario, anything similar of those sorts). Thank you for your understanding. 
        </p>
      </div>
      </MessagesContext.Provider>
    </ProfilePictureContext.Provider>
    </ContactNameContext.Provider> 
    </ContactsContext.Provider> 
    </TimeContext.Provider>
  );
}

export default App;
