import React, { useEffect, useState } from "react";
import { addItem, getItems } from "./api";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(setItems);
  }, []);

  const handleAdd = async () => {
    const newItem = { name: "Nuevo", description: "Ejemplo" };
    const saved = await addItem(newItem);
    setItems([...items, saved]);
  };

  return (
    <div>
      <h1>FastAPI + React Demo</h1>
      <button onClick={handleAdd}>Agregar Item</button>
      <ItemList items={items} />
    </div>
  );
}

export default App;
