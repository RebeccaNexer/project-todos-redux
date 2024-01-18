import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { id: "1",
          text: "Smör",
          isChecked: false,
        },
        { id: "2",
          text: "Mjölk",
          isChecked: false,
        },
        { id: "3",
        text: "Bröd",
        isChecked: false
      },
    ]
  };
  
export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
        addItem: (store, action) => {
            store.items.push({
              id: Date.now(),
              text: action.payload,
              isChecked: false,
            });
          },
          removeItem: (store, action) => {
            const id = action.payload;
            const newArray = [...store.items]
            const condition = (element) => element.id === id;
            const foundIndex = newArray.findIndex(condition);
            newArray.splice(foundIndex, 1);
            store.items = newArray;
    },
    clearTodos: (store) => {
      store.items = []
    },
    handleCheck: (store, action) => {
      const { id } = action.payload;
      const newArray = [...store.items]
      const indexOfObject = newArray.findIndex((item) => item.id === id)
      if (indexOfObject > -1) {
        newArray[indexOfObject].isChecked = !newArray[indexOfObject].isChecked
        store.items = newArray
      }
    }
  }
});