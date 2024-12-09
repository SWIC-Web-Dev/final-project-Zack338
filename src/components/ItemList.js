import React from 'react';
import Item from './Item';
import stateManager from '../state/stateManager';

function ItemList() {
  const { items } = stateManager.getState();

  return (
    <ul>
      {items.map((item, index) => (
        <Item key={index} item={item} index={index} />
      ))}
    </ul>
  );
}

export default ItemList; 
