import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from '../reducers/todos/todoSlice';


const AddTodo = () => {
  const [newItem, setNewItem] = useState("");
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      dispatch(addItem(newItem));
      setNewItem("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add item to list"
      />
      <button onClick={handleAddItem}>Lägg till</button>
    </div>
  );
};

export default AddTodo;