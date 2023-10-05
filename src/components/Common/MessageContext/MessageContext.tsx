import { createContext } from "react";

export type Message = {
    sender: boolean,
    text: string
}

export type MessagesType = {
    messages: Message[] | null;
    setMessages: (messages: Message[] | null) => void;
}

const MessagesContext = createContext<MessagesType | null>(null)

export default MessagesContext;