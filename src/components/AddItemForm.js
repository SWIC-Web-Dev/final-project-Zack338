import React, { useState } from 'react';
import stateManager from '../state/stateManager';

function AddItemForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { items } = stateManager.getState();
    items.push(inputValue);
    stateManager.setState({ items });
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 flex-grow"
      />
      <button type="submit" className="bg-green-500 text-white p-2 ml-2">Add</button>
    </form>
  );
}

export default AddItemForm;
