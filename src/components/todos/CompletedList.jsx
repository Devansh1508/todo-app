import Completed from "./Completed";
import { useSelector } from "react-redux";

const CompletedList = (props) => {
  const handleUpdateTasks = (updatedTasks) => {
    props.setTasks(updatedTasks);
  };
  const isTile = useSelector((state) => state.nav.isTile);

  return (
    <div className={`${isTile ? "flex gap-10 flex-wrap mt-1" : ""} w-[100%]`}>
      {props.todos.map(todo => (
        todo.completed && (<Completed key={todo.id} text={todo.text} completed={todo.completed} important={todo.important} id={todo.id} updateTasks={handleUpdateTasks} />)
      ))}
    </div>
  )
}

export default CompletedList