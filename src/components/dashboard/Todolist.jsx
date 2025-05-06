import React, { useState } from "react";
import "./head-sidebar.css";

const TodoWidget = () => {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setinputTodo] = useState("");

  const addTodo = () => {
    if (inputTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: inputTodo }]);
      setinputTodo("");
      
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-widget">
      <h4>Todo Management</h4>
      <div className="todo">
        <input className="todo-input"
          type="text"
          placeholder="Add a new todo"
          value={inputTodo}
          onChange={(e) => setinputTodo(e.target.value)}
        />
        <button className="todoaddbutton"onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
      <ul>
        {todos.map((todo, i) => (
          // key id use for unique key
          <li key={todo.i}>  
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
         
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TodoWidget;