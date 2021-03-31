import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  ACTIVE_TODO,
} from "./todoConstants";
// import { completeTodo, activeTodo } from "./todoAction";

export var addTodo = (todoObj) => ({
  type: ADD_TODO,
  payload: {
    todo: todoObj,
  },
});

export var deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  payload: {
    todoId,
  },
});

export var completeTodo = (todoId) => ({
  type: COMPLETE_TODO,
  payload: {
    todoId,
  },
});


export var activeTodo = (todoId) => ({
  type: ACTIVE_TODO,
  payload: {
    todoId,
  },
});


