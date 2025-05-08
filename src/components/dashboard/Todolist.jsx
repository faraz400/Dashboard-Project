import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputuser, adduser, deleteuser, editTuser } from "../../redux/slices/todosslice";
import "./head-sidebar.css";

const TodoWidget = () => {
  const dispatch = useDispatch();
  const { user, inputuser, editIndex } = useSelector((state) => state.user);
  const [sortby, setsortby] = useState("default");

  const handleAddOrUpdate = () => {
    dispatch(adduser());
  };
  const sortedusertodo=useMemo(()=>{
    let sortedTodos = [...user]; //create a copy of todo array
    if(sortby === "alphabet"){
      sortedTodos.sort((a,b) => a.text.localeCompare(b.text));// sort by alphabet
    }else if(sortby === "date"){
        sortedTodos.sort((a ,b) => a.id - b.id); //sort by creating date
      }
      return sortedTodos;
    },
    [user, sortby]);

  
  return (
  
    <div className="content">
    <div className="todo-widget">
      <h4>Todo Management</h4>
      <div className="user">
        <input
          className="todo-input"
          type="text"
          placeholder="Add a new todo"
          value={inputuser}
          onChange={(e) => dispatch(setInputuser(e.target.value))}
        />
        <button className="todoaddbutton" onClick={handleAddOrUpdate}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
{/* sorted user todo */}
<div className="todo-sorting">
  <label>Sorted by</label>
  <select value={sortby} onChange={(e)=> setsortby(e.target.value)}>
    <option value="default">default</option>
    <option value="alphabet">alphabet</option>
    <option value="date">Date</option>
  </select>
</div>

      </div>
      <div className="todo-list">
        <ul>
          {sortedusertodo.map((users, index) => (
            <li key={users.id}>
              {users.text}
              <div className="todo-list">
                <button className="editbtn" onClick={() => dispatch(editTuser(index))}>
                  Edit
                </button>
                <button className="deletebtn" onClick={() => dispatch(deleteuser(users.id))}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default TodoWidget;