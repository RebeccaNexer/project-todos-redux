import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from './reducers/tasks';
import { TodoList } from './components/todoList';

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });
export const App = () => {
  return (
    <Provider store={store}>
       <TodoList />
    </Provider>
  );
};