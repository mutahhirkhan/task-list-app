import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from './../../Redux/todos/todoAction';
class Form extends React.Component {
  state = {
    todoInput: "",
  };

  changeInput = (e) => {
    var value = e.target.value;
    this.setState({
      todoInput: value,
    });
    // console.log(value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    var tempTodo = {
      id: uuidv4(), //return reandom string
      isCompleted: false,
      description: this.state.todoInput,
    };
    this.props.addTodo(tempTodo);
  };

  render = () => {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            // onChange={(e)=> this.changeInput(e)}
            // passing e value as a by default parameter
            onChange={this.changeInput}
            value={this.state.todoInput}
            type="text" placeholder="TODO"
          ></input>
          <button>Add</button>
        </form>
      </div>
    );
  };
}

var action = {
    addTodo,
};

export default connect(null, action)(Form);