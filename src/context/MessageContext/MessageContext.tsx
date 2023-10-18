import { createContext } from "react";

export type Message = {
    id: string,
    sender: boolean,
    text?: string,
    image?: File
}

export type MessagesType = {
    messages: Message[] | null;
    setMessages: (messages: Message[] | null) => void;
}

const MessagesContext = createContext<MessagesType | null>(null)

export default MessagesContext;