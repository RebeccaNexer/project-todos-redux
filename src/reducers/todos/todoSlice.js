import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addItem: (store, action) => {
            store.items = [...store.items, action.payload]
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

export const { items } = todoSlice.actions;

export default todoSlice.reducer;