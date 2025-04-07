import React, {useState} from 'react'
import "../App.css";
import TodoForm from './TodoForm';
import DateTime from './DateTime';
import TodoList from './TodoList';
const Todo = () => {
    const [task, setTask] = useState([]);
   

    const handleClearAll = () => {
      setTask([]);
    }

  return (
    <>
      <div className='box'>
        <h1>ToDo App</h1>
        <DateTime />
        <TodoForm task={task} setTask={setTask} />
        {task.map((taskValue, idx) => {
          return (
            <TodoList taskValue={taskValue} idx={idx} task={task} setTask={setTask}  />
          )
        })}

        <button onClick={handleClearAll}>Clear All</button>
      </div>
    </>
  )
}

export default Todo