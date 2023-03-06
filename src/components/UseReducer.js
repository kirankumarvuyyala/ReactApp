import React, { useRef, useReducer} from 'react'
const initialState = [
    { id: 1, title: "todo-1", completed: false },
    { id: 2, title: "todo-2", completed: true },
  ];
  const reducer=(state,action)=>{
      switch (action.type) {
          case 'add':
              return [...state,action.playload]
          case 'delete':
              return (state.filter((todos) => todos.id !== action.id));
              case 'TOGGLE':
                return state.map((todos)=>{
                if(todos.id===action.id){
                    return {...todos, completed:!todos.completed};
                } else {
                    return todos;
                }

              });
          default:
              return state;

      }
  }
  let nextid=3;
export default function UseReducer() {
    const[todos,dispatch]=useReducer(reducer,initialState);
    console.log(todos);
    const myref=useRef();
    const addNewToDo=(title)=>{
        const actionObj={

            type:'add',
            playload:{
                id:nextid++,
                title:title,
                completed:false
            },
        };
        dispatch(actionObj);

    }
    const handelcomplete=(todos)=>{
        dispatch({type:"TOGGLE",id:todos.id})
    }
    const deleteTodo=(id)=>{
        dispatch({type:'delete',id:id})
    }


  return (
    <>
<h1>Add ToDos</h1>
<input  ref={myref}/>
<button onClick={()=>{addNewToDo(myref.current.value)}}>Add</button>
<hr/>
{todos.map((todo)=>(
    <div key={todo.id}>
        <label>
            <input type='checkbox'
            checked={todo.completed}
            onChange={()=>handelcomplete(todo)}>

            </input>
            <span style={{textDecoration:todo.completed?"line-through":"none"}} >
                {todo.title}
<button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
            </span>
        </label>
    </div>
))}
    </>
  )
}
