import React, { useState } from 'react'

const TodoForm = ({task, setTask}) => {
    const [inputValue, setInputValue] = useState("");

    let handleInputChange = (value) => {
        setInputValue({id: value, content: value, checked : false});
    }
    
    let handleFormSubmit = (evt) => {
        evt.preventDefault();
        if(!inputValue.content) return;
        if(task.find((currTask) => currTask.content === inputValue.content )) {
            setInputValue("");
            return;
        }

        setTask((prev) => [
            ...prev, 
            {id : inputValue.id, content : inputValue.content, checked : inputValue.checked}
        ]);
        setInputValue("");
    }

  return (
    <div>
        <form onSubmit={(evt)=>handleFormSubmit(evt)}>
            <div>
                <input type="text" placeholder='Task..' 
                value={inputValue.content} 
                onChange={(e)=> handleInputChange(e.target.value)} />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default TodoForm
