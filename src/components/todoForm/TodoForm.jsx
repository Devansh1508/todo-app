import React, { useState } from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { useSelector } from 'react-redux';

const TodoForm = ({ setTasks }) => {
  const [task, setTask] = useState('');
  const darkMode = useSelector(state => state.nav.darkMode);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newTask = { text: task, completed: false, id: Date.now(), important: false };
      saveTaskToLocalStorage(newTask);
      setTask('');
    }
  };

  const saveTaskToLocalStorage = (task) => {
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = [...existingTasks, task];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  return (
    <div
      className="w-[100%] min-h-[25vh] p-7"
      style={darkMode ? { backgroundColor: '#2f3630' } : {
        background:
          'linear-gradient(180deg, rgba(245,252,246,1) 0%, rgba(231,240,232,1) 100%)',
      }}
    >
      <div className="w-[100%] h-[80%] flex items-center">
        <form className="w-[100%]" onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
            className="w-[100%] h-[100%] p-2 px-3 rounded-md"
            style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }}
          />
        </form>
      </div>
      <div className="flex w-[100%] justify-between">
        <div className="flex gap-4">
          <NotificationsNoneOutlinedIcon />
          <CachedOutlinedIcon />
          <CalendarTodayOutlinedIcon />
        </div>
        <div>
          <button
            type="submit"
            className={`${darkMode?'darkModeBtn':''} bg-[#ccdfcf] text-[#357937] p-2 px-3 rounded-md`}
            onClick={handleSubmit}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;