import { createContext } from "react";

export type Message = {
    id: string,
    sender: boolean,
    text?: string,
    image?: File,
    date?: string
}

export type MessagesType = {
    messages: Message[] | null;
    setMessages: (messages: Message[] | null) => void;
    setIsEditing: (isEditing: boolean) => void;
    isEditing: boolean;
}

const MessagesContext = createContext<MessagesType | null>(null)

export default MessagesContext;