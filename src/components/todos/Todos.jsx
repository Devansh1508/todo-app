import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useSelector } from "react-redux";

const Todos = (props) => {
  const [isChecked, setIsChecked] = React.useState(props.completed);
  const [isImportant, setIsImportant] = React.useState(props.important);
  const darkMode = useSelector((state) => state.nav.darkMode);
  const isTile = useSelector((state) => state.nav.isTile);

  const handleCheckboxChange = (key) => {
    setIsChecked(!isChecked);
    key = key - 1;
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[key].completed = !tasks[key].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    props.updateTasks(tasks);
  };

  const handleImportant = () => {
    setIsImportant(!isImportant);
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const task = tasks.find((t) => t.id === props.id);
    task.important = !task.important;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    props.updateTasks(tasks);
  };

  return (
    <div>
      {isTile ? (
        <div>
            <div
          className={`${
            darkMode ? "border-[#496E4B33]" : ""
          } flex items-center border-2 p-4 h-[10vh] w-[22vw]`}
        >
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleCheckboxChange(props.id)}
            className="custom-checkbox"
            style={{accentColor:'green'}}
          />
          <span className={`ml-2 ${props.completed ? "line-through" : ""}`}>
            {props.text}
          </span>
          <div className="ml-auto">
            <button onClick={handleImportant}>
              {isImportant ? (
                <StarIcon style={darkMode ? { color: "#ffffff" } : {}} />
              ) : (
                <StarBorderIcon style={darkMode ? { color: "#ffffff" } : {}} />
              )}
            </button>
          </div>
        </div>
        </div>
      ):(
        <div
          className={`${
            darkMode ? "darkModeTableBorder" : ""
          } w-[100%] flex items-center border-t-2 p-4 `}
        >
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleCheckboxChange(props.id)}
            className="custom-checkbox"
            style={{accentColor:'green'}}
          />
          <span className={`ml-2 ${props.completed ? "line-through" : ""}`}>
            {props.text}
          </span>
          <div className="ml-auto">
            <button onClick={handleImportant}>
              {isImportant ? (
                <StarIcon style={darkMode ? { color: "#ffffff" } : {}} />
              ) : (
                <StarBorderIcon style={darkMode ? { color: "#ffffff" } : {}} />
              )}
            </button>
          </div>
        </div>
      ) }
    </div>
  );
};

export default Todos;
