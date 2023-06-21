import React from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const items = [
    { id: 'item-1', content: <tbody> <td>Manifestacion</td> <td>Prubea</td>  <td>Manifestacion</td>   </tbody>  },
    { id: 'item-2', content: 'Elemento 2' },
    { id: 'item-3', content: 'Elemento 3' },
  ];
  
  const Column = () => {
    return (
      <Droppable droppableId="column">
        {(provided) => (

            

          <div
            ref={provided.innerRef}
            {...provided.droppableProps}

            style={{
              background: 'lightgray',
              padding: 16,
              width: 800,
              minHeight: 800,
            }}
          >
            
            

            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index} >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      userSelect: 'none',
                      padding: 10,
                      margin: '0 0 8px 0',
                      backgroundColor: 'white',
                      ...provided.draggableProps.style,
                    }}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  };
  
  const prueba = () => {
    const handleDragEnd = (result) => {
      if (!result.destination) {
        return;
      }
  
      const newItems = Array.from(items);
      const [reorderedItem] = newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, reorderedItem);
  
      // Actualizar el estado con el nuevo orden de los elementos
      console.log(newItems);
    };
  
    return (

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
                <DragDropContext onDragEnd={handleDragEnd}>
                <Column />
                </DragDropContext>
                </div>
    );
  };


export default prueba
