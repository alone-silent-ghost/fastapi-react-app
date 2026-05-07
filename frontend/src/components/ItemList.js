import React from "react";

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.description}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
