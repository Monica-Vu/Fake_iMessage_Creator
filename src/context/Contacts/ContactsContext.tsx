import { createContext } from "react";

export type Contact = {
    id: number,
    name: string,
    image?: File
}

export type ContactType = {
    contacts: Contact[] | [];
    setContacts: (contacts: Contact[] | []) => void;
    updateImage: (id: number, image: File) => void;
    updateName: (id: number, name: string) => void;
}

const ContactsContext = createContext<ContactType | []>([])

export default ContactsContext;