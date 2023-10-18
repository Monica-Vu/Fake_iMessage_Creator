import { createContext } from "react";

export type ContactNameType = {
    contactName: string | "";
    setContactName: (name: string | "") => void;
}

const ContactNameContext = createContext<ContactNameType | "">("")

export default ContactNameContext;