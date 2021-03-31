import {
  ACTIVE_TODO,
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
} from "./todoConstants";
var initialState = [];

var todoReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return [...state, payload.todo];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload.todoId);

    // filteration
    //always make fresh state
    case COMPLETE_TODO:
      return state.map((todo) => {
        // console.log(todo.id, payload.todoId)
        if (todo.id === payload.todoId) {
          return {
            ...todo, // Refreshing the todo
            isCompleted: true,
          };
        } else {
          return { ...todo }; //returning same tdo with refreshing
        }
      });

    case ACTIVE_TODO:
      return state.map((todo) => {
        // console.log(todo.id, payload.todoId)
        if (todo.id === payload.todoId) {
          return {
            ...todo, // Refreshing the t0do
            isCompleted: false,
          };
        } else return { ...todo }; //returning same tdo with refreshing
      });

    default:
      return state;
  }
};

export default todoReducer;
