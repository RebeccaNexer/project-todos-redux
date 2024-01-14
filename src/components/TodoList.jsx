
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, completeTask, clearTodos } from '../reducers/todos/todoSlice';
import AddTodo from './AddTodo';
export const TodoList = () => {
    const items = useSelector((store) => store.todos.items);
    const dispatch = useDispatch();
    console.log(items);

    // const dummyList = [
    //     { id: "1",
    //       text: "Städa",
    //       taskCompleted: false,
    //     },
    //     { id: "2",
    //       text: "Plugga",
    //       taskCompleted: false,
    //     },
    //     { id: "3",
    //     text: "Handla",
    //     taskCompleted: false,
    //   },
    // ]
    return (
        <div className="container">
            <h1>TODO lista</h1>
            {items.map((item) => {
                return <div className="divider" key={item.id}>
                <h2>• {item.text}</h2>
                <button onClick={() => dispatch(completeTask(item.id))}>Fixat</button>
                <button onClick={() => dispatch(deleteItem(item.id))} className='btn-red'>Ta bort</button>
           
                </div>
                })}

                <div className="flex margin-top">
                <AddTodo />
                <button onClick={() => dispatch(clearTodos(items.id))} className="btn-red">Rensa</button>
                </div>
        </div>
    )
}