import React, { useState } from 'react'
import './App.css';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = newtask => {
    setTasks([...tasks, newtask])
  }

  const deleteTask = id => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  const updateTask = ( updatedTask, id ) => {
    const newTasks = tasks.map( task => task.id === id ? updatedTask : task );
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <main className="container border border-2 rounded my-5 p-5 w-75">
        <header className="row ">
          <h1 className="text-center">ToDo List</h1>
        </header>
        <TaskForm addTask={addTask} />
        <Tasks tasks={tasks} deleteTask={deleteTask} updateTask = {updateTask} />
      </main>
    </div>
  );
}

export default App;
