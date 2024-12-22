import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() === "") return;
        setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
        setNewTodo(""); // Clear the input field
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, isDone: true }
                    : todo
            )
        );
    };

    let markAllDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                isDone: true,
            }))
        );
    };    

    return (
        <div>
            <input
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />
            <hr />
            <h4>Tasks To Do</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                            {todo.task}
                        </span>
                        &nbsp;
                        <button onClick={() => deleteTask(todo.id)}>Delete</button>
                        <button onClick={() => markAsDone(todo.id)}>Done</button>
                    </li>
                ))}
            </ul>

            <button onClick={markAllDone}>Mark All as Done</button>
            </div>
    );
}
