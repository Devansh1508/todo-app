import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import SideBar from '../components/sidebar/SideBar';
import TodoList from '../components/todos/TodoList';
import TodoForm from '../components/todoForm/TodoForm';
import CompletedList from '../components/todos/CompletedList';
import { useSelector } from 'react-redux';

const Todo = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const darkMode = useSelector(state => state.nav.darkMode);
  const active=useSelector(state=>state.nav.active)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={`${darkMode ? 'darkMode1' : ''} w-[100vw] min-h-[100vh] flex flex-col items-center`}>
      <Navbar />
      <div className='w-[90%] flex gap-4'>
        <SideBar />
        <div className='flex flex-col w-[100%]'>
          <TodoForm setTasks={setTasks} />
          <TodoList todos={tasks} setTasks={setTasks} />
          <div className='mt-4'>Completed</div>
          <CompletedList todos={tasks} setTasks={setTasks}/>
        </div>
      </div>
    </div>
  );
};

export default Todo;