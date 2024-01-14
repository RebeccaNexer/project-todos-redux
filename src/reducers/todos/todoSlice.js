import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
      items: [
          { id: "1",
            text: "Ägg",
            taskCompleted: false,
          },
          { id: "2",
            text: "Smör",
            taskCompleted: false,
          },
          { id: "3",
          text: "Mjölk",
          taskCompleted: false,
        },
      ]
  },
    reducers: {
        addItem: (store, action) => {
          store.items.push({
            id: Date.now(),
            text: action.payload,
            taskCompleted: false,
          });
        },
        deleteItem: (store, action) => {
        store.items = store.items.filter((item) => item.id !== action.payload.id)
          },
        completeTask: (store, action) => {
            const { id } = action.payload;

            store.items = store.items.map((item) => {
                if (item.id === id) {
                    return { ...item, completeTask: !item.completeTask}
                }
                return item
            })
        },
        clearTodos: (store) => {
            store.items = []
        }
    },
});

export const { items, addItem, deleteItem, completeTask, clearTodos } = todoSlice.actions;

export default todoSlice.reducer;