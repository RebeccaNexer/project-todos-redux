
import { useDispatch, useSelector } from 'react-redux';
import { tasks } from '../reducers/tasks';
import AddTodo from './AddTodo';
export const TodoList = () => {
    const items = useSelector((store) => store.tasks.items);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h1>Inköpslista</h1>
            {items.map((item) => (
                <div className="divider" key={item.id}>
                <h2>• {item.text}</h2>
                <input
                    type="checkbox"
                    id={item.id}
                    className="checkbox"
                    name="todos"
                    checked={item.isChecked}
                    onChange={() => dispatch(tasks.actions.handleCheck(item))} />
                  <span className="checkmark" />
                  <button className="btn-red" onClick={() => dispatch(tasks.actions.removeItem(item.id))}>
                    Ta bort
                  </button>
                </div>
                ))}

                <div className="flex margin-top">
                <AddTodo />
                <button onClick={() => dispatch(tasks.actions.clearTodos(items.id))} className="btn-red">Rensa lista</button>
                </div>
        </div>
    )
}