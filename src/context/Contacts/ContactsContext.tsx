import { createContext } from "react";

export type Contact = {
    id: string,
    name: string,
    image?: File
}

export type ContactType = {
    contacts: Contact[] | null;
    setContacts: (contacts: Contact[] | null) => void;
}

const ContactsContext = createContext<ContactType | null>(null)

export default ContactsContext;