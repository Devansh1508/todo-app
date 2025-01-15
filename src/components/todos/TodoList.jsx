import Todos from "./Todos.jsx"
import { useSelector } from "react-redux";

const TodoList = (props) => {
  const active=useSelector(state=>state.nav.active)
  const handleUpdateTasks = (updatedTasks) => {
    props.setTasks(updatedTasks);
  };
  const isTile = useSelector((state) => state.nav.isTile);

  return (
    <div className={`${isTile ? "flex gap-10 flex-wrap mt-4" : ""} w-[100%]`}>
      {props.todos.map(todo => (
        (active===2)?(todo.important && <Todos key={todo.id} text={todo.text} completed={todo.completed} important={todo.important} id={todo.id} updateTasks={handleUpdateTasks} />)
        :
        <Todos key={todo.id} text={todo.text} completed={todo.completed} important={todo.important} id={todo.id} updateTasks={handleUpdateTasks} />

      ))}
    </div>
  )
}

export default TodoList