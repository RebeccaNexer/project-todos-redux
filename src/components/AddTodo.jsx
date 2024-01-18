import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tasks } from '../reducers/tasks';

const AddTodo = () => {
  const [newItem, setNewItem] = useState("");
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      dispatch(tasks.actions.addItem(newItem));
      setNewItem("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Lägg till i inköpslistan"
      />
      <button onClick={handleAddItem}>Lägg till</button>
    </div>
  );
};

export default AddTodo;