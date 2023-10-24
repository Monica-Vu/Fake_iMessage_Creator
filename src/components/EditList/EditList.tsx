import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable, type OnDragEndResponder } from 'react-beautiful-dnd';
import MessagesContext, { MessagesType } from "../../context/MessageContext/MessageContext";

const initialTasks = [
    {
        id: "1",
        title: "Task 1",
    },
    {
        id: "2",
        title: "Task 2",
    },
    {
        id: "3",
        title: "Task 3",
    },
];

const EditList: React.FC = ({ }) => {
    const [tempList, setTempList] = useState(initialTasks);

    //@ts-expect-error
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(tempList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTempList(items);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {tempList.map((task, index) => (
                            <Draggable 
                                key={task.id}
                                draggableId={task.id}
                                index={index}> 
                                {(provided) => (
                                    <div 
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}>
                                    <div>{task.title}</div>
                                    </div>
                                )}
                                </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>)}
            </Droppable>
        </DragDropContext >
    )
}

export default EditList;
