import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable, type OnDragEndResponder } from 'react-beautiful-dnd';
import MessagesContext, { MessagesType, type Message } from "../../context/MessageContext/MessageContext";
import ImageCrop from "../ProfilePictureUpload/ImageCrop";
import Button from "../Common/Button/Button";
import "./EditList.css"

const EditList: React.FC = ({ }) => {
    const { messages, setMessages, setIsEditing } = React.useContext(MessagesContext) as MessagesType;
    const [tempMessages, setTempMessages] = useState(messages);

    const handleUpdateList = () => {
        setMessages(tempMessages);
        setIsEditing(false);
    }

    const handleCancelEditList = () => {
        setIsEditing(false);
    }

    //@ts-expect-error
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(tempMessages || []);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTempMessages(items);
    }

    const handleDelete = (id: string) => {
        const newList = tempMessages?.filter((item) => item.id !== id);
        setTempMessages(newList || [])
    }

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="messages">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {tempMessages?.map((message, index) => (
                                <Draggable
                                    key={message.id}
                                    draggableId={message.id}
                                    index={index}>
                                    {(provided) => (
                                        <div
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}>
                                            <div className="list-item">
                                                {message.text}
                                                {message.image && <ImageCrop file={message.image} width="20%" height="20%" />}
                                                {message.date}
                                                <Button text="delete" onClick={() => handleDelete(message.id)} colour="red" />
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>)}
                </Droppable>
            </DragDropContext >
            <Button text="Update" onClick={handleUpdateList} />
            <Button text="Cancel" onClick={handleCancelEditList} />
        </div>
    )
}

export default EditList;
