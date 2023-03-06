import React from "react";
import { useSelector } from "react-redux";
import  ToDo from './ToDo'
export default function ToDoList() {
  const myToDos = useSelector((state) =>state.rootReducer.todosReducer)
  
  console.log('kk'+JSON.stringify(myToDos)  );
  // const myToDos = useSelector((state) => {
	// 	return state.todosReducer;
	//   });
  return (
    <>
      <h1>To DO List</h1>
      {myToDos.map((toDo) => (
       
         <ToDo toDo={toDo} key={toDo.id}></ToDo>
    
      ))}
    </>
  );
}