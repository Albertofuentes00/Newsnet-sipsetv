import React, { useState } from 'react';
import Card from './Card';

const PruebaDragDrop = () => {
  const [cards, setCards] = useState([
    { id: 1, text: 'Elemento 1' },
    { id: 2, text: 'Elemento 2' },
    { id: 3, text: 'Elemento 3' },
  ]);

  const moveCard = (dragIndex, hoverIndex) => {
    const draggedCard = cards[dragIndex];
    const updatedCards = [...cards];
    updatedCards.splice(dragIndex, 1);
    updatedCards.splice(hoverIndex, 0, draggedCard);
    setCards(updatedCards);
  };

  return (
    <div>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          index={index}
          moveCard={moveCard}
        />
      ))}
    </div>
  );
};

export default PruebaDragDrop;
