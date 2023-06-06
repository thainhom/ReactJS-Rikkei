import React, { useState } from 'react';


function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState(null);

  function addTask() {
    if (!tasks || !newTask) {
      setError("vui long ko de trong")
      return
    } else {
      setTasks([...tasks, newTask]);
      setNewTask(

      );
    }





  }


  function handleChange(event) {
    setNewTask(event.target.value);


  }


  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input type="text" value={newTask} onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
      {{ error } && <span>{error}</span>}
    </div>
  );
}
export default TaskList;