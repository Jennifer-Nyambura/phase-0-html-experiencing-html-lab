import React, { useState } from "react";
import Filter from "./components/Filter";
import ItemForm from "./components/ItemForm";
import Item from "./components/Item";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Apples", category: "Produce" },
    { id: 2, name: "Milk", category: "Dairy" },
    { id: 3, name: "Cake", category: "Dessert" },
  ]);

  const [searchText, setSearchText] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  const itemsToDisplay = items.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <Filter 
        searchText={searchText} 
        onSearchChange={setSearchText} 
      />
      <ItemForm onItemFormSubmit={handleAddItem} />
      <ul>
        {itemsToDisplay.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default App;
