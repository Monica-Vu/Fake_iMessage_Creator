import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable, type OnDragEndResponder } from 'react-beautiful-dnd';
import MessagesContext, { MessagesType } from "../../context/MessageContext/MessageContext";
import ImageCrop from "../ProfilePictureUpload/ImageCrop";
import Button from "../Common/Button/Button";

const handleUpdateList = () => {
    console.log("handleUpdateList is called")
}

const EditList: React.FC = ({ }) => {
    const { messages, setMessages } = React.useContext(MessagesContext) as MessagesType;

    //@ts-expect-error
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(messages || []);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setMessages(messages);
    }

    return (
        <div> 
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="messages">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {messages?.map((message, index) => (
                            <Draggable 
                                key={message.id}
                                draggableId={message.id}
                                index={index}> 
                                {(provided) => (
                                    <div 
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}>
                                    <div>
                                        {message.text}
                                        {message.image && <ImageCrop file={message.image} width="20%" height="20%" />}
                                        {message.date}
                                    </div>
                                    </div>
                                )}
                                </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>)}
            </Droppable>
        </DragDropContext >
        <Button text="Update" onClick={handleUpdateList}/>
        </div>
    )
}

export default EditList;
