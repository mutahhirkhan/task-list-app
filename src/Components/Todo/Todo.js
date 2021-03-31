import React from "react";
import { connect } from "react-redux";
import {
  deleteTodo,
  completeTodo,
  activeTodo,
} from "./../../Redux/todos/todoAction";

var Todo = (props) => {
  return (
    <div >
      <h3>
        {props.todo.description}
        
        {/* CONDITIONAL RENDERING  */} 
        {props.todo.isCompleted ? (
          <button onClick={() => props.activeTodo(props.todo.id)}>
          Reactivate
        </button>
        ) : (
          <button onClick={() => props.completeTodo(props.todo.id)}>
            InComplete
          </button>
        )}

        <button onClick={() => props.deleteTodo(props.todo.id)}>
          delete
        </button>
      </h3>
    </div>
  );
};

var actions = {
  deleteTodo,
  activeTodo,
  completeTodo,
};

export default connect(null, actions)(Todo);
