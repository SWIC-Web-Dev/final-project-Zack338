import React from 'react';
import stateManager from '../state/stateManager';

function Item({ item, index }) {
  const handleDelete = () => {
    const { items } = stateManager.getState();
    items.splice(index, 1);
    stateManager.setState({ items });
  };

  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span>{item}</span>
      <button className="bg-red-500 text-white p-1" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Item;
