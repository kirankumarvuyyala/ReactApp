
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../action/Action";
export default function AddToDo() {
  const dispatch = useDispatch();
  const myRef1 = useRef();

  const addNewToDo = () => {
    const todoText = myRef1.current.value;
    const actionObj = addTodo(todoText);
    dispatch(actionObj);
  };
  return (
    <>
      <h1>Add a new todo</h1>
      <input ref={myRef1} /> &nbsp;
      <button onClick={addNewToDo}>Add New ToDO</button>
    </>
  );
}