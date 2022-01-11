import React, { useState } from "react";

export default function List() {
  const [items, setItems] = useState([]);

  const onAddClick = () => setItems([...items, {}]);
  const onRemoveClick = (index) => () => {
    console.log(index);
    const patch = [...items];
    patch.splice(index, 1);
    setItems(patch);
  };
  return (
    <>
      <button id="add" onClick={onAddClick}>
        +
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input />
            <button onClick={onRemoveClick(index)}>-</button>
          </li>
        ))}
      </ul>
    </>
  );
}
