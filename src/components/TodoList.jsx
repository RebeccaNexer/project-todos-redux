
import { useDispatch, useSelector } from 'react-redux';
export const TodoList = () => {
    const { items } = useSelector((store) => store.todo.items);
    const dispatch = useDispatch();
    console.log(items);

    const dummyList = [
        { id: "1",
          text: "Städa",
          taskCompleted: false,
        },
        { id: "2",
          text: "Plugga",
          taskCompleted: false,
        },
        { id: "3",
        text: "Handla",
        taskCompleted: false,
      },
    ]
    return (
        <div className="container">
            <h1>TODO lista</h1>
            {dummyList.map((item) => {
                return <div className="divider" key={item.id}>
                <h2>• {item.text}</h2>
                <button>Fixat</button>
                <button className="btn-red">Ta bort</button>
                </div>
                // <button onclick={() => dispatch(completeTask(item.id))}>Fixat</button>
                // <button onclick={() => dispatch(deleteItem(item.id))}>Ta bort</button>
         
            })}
            <div className="flex margin-top">
            <button>Lägg till</button>
            <button className="btn-red">Rensa</button>
            
            {/* <button onclick={() => dispatch(addItem(item.id))}>Lägg till</button>
            <button onclick={() => dispatch(clearTodos(item.id))}>Rensa</button> */}
            </div>
        </div>
    )
}