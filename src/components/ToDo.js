import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleToDo } from "../action/Action";

export default function ToDo({toDo}) {
  const dispatch = useDispatch();
  console.log('todo'+toDo);

  const deleteMyTodo = (id) => {
    const actionObj = deleteTodo(id);
    dispatch(actionObj);
  };
  const toggleMyTodo = (id) => {
    const actionObj = toggleToDo(id);
    dispatch(actionObj);
  };
  return (
    <>
     <li>
      <span style={{textDecoration: toDo.completed ? 'line-through' : 'none'}}>
          {toDo.text}
       </span> &nbsp;
      <button onClick={()=>{deleteMyTodo(toDo.id)}}>DELETE</button> &nbsp;
      <button onClick={()=>{toggleMyTodo(toDo.id)}}>TOGGLE</button> &nbsp;
    </li>
    </>
  );
}