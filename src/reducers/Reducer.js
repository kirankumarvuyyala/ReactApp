import { combineReducers } from "redux";
	const initialState = [
	  { id: 1, text: "aaaaa", completed: false },
	  { id: 2, text: "bbbbb", completed: true },
	];
	function todosReducer(state = initialState, action) {
	  switch (action.type) {
		case "ADD_TODO":
		  return [
			...state,
			{
			  id: action.id,
			  text: action.text,
			},
		  ];
		case "DELETE_TODO":
		  return state.filter((todo) => todo.id !== action.id);
		case "TOGGLE_TODO":
		  return state.map((todo) =>
			todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
		  );
		default:
		  return state;
	  }
	}
	function reducer2(state = [], action) {
	  return state;
	}
	const rootReducer = combineReducers({
	  todosReducer,
	  reducer2,
	});
	export default rootReducer;
