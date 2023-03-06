export const increment = () => {
    return {
      type: "INCREMENT",
    };
  };
  export const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };
  export const reset = () => {
    return {
      type: "RESET",
    };
  };
  let nextTodoId = 3;
  export function addTodo(text) {
     return {
       type: "ADD_TODO",
       id: nextTodoId++,
       text,
     };
   }
   export function deleteTodo(id) {
     return {
       type: "DELETE_TODO",
       id,
     };
   }
   export function toggleToDo(id) {
     return {
       type: "TOGGLE_TODO",
       id,
     };
   }