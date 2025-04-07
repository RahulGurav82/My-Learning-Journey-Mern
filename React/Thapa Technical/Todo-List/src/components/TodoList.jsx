import React from 'react'
import { MdOutlineDoneOutline, MdDeleteForever  } from "react-icons/md";



const TodoList = ({taskValue, idx, setTask, task}) => {
    const handleDelete = (taskValue) => {
        const FillterTask = task.filter((tasks) => tasks.content !== taskValue);
        setTask(FillterTask);
    }
  return (
    <div>
      <ul>
        <li key={idx}>  
          <span>{taskValue}</span>
            <MdOutlineDoneOutline />
            <button onClick={() => handleDelete(taskValue)}>
              <MdDeleteForever/>
            </button>
        </li>
       </ul>
    </div>
  )
}

export default TodoList
