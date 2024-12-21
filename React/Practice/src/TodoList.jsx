import { useState } from "react"
import {v4 as uuidv4 } from "uuid"

export default function TodoList() {
    let [todos, setTodos ] = useState([{task: "sample task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((todos) => {
            return [...todos, {task : newTodo, id : uuidv4}]
        });
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTask = (id) => {
        todos.filter{(todo) => {
            setTodos(todo.id != id);     
        }}
    }
    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />

            <hr />
            <h4>Task Todo</h4>
            <ul>
                {
                todos.map((todo) => {
                        <li key={todo.id}><span>{todo.task}</span>&nbsp;<button onClick={() => deleteTask(todos.id)}>Delete</button></li>
                })}
            </ul>
        </div>
    )
}