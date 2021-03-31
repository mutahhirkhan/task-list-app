import React from "react";
import { connect } from "react-redux";

import Todo from './../Todo/Todo'


var TodosContainer = ({filter, todos, value}) => {
  console.log("in todos container");
  var filteredTodos = []
  if(filter === "all")
  {
    filteredTodos = todos
  }
  else if(filter === "completed"){
    filteredTodos =  todos.filter((todo) => todo.isCompleted === true)
  }
  else if(filter === "active"){ 
    filteredTodos =  todos.filter((todo) => todo.isCompleted === false)
  }

  if(value !== ""){
    filteredTodos = todos.filter((todo) => {
      if (todo.description.toLowerCase().includes(value))     return todo
      else if(todo.description.toUpperCase().includes(value)) return todo
    });
  }
  


  return (
    <div>
      {/* here first todo is prop that is sent to Todo.js  */}
      {/* and {todo} is the value */}
      {/* todo ={todo}  */} 
      {filteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      {/* {console.log(filteredTodos)} */}
    </div>
  );
};


var mapState = (state) => ({
  todos: state.todos,
  filter: state.filters.status,
  value: state.filters.value
})

export default connect(mapState)(TodosContainer);
