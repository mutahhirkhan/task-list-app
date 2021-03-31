import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import TodosContainer from "./Components/TodosContainer/TodosContainer";
import Filters from "./Components/Filters/Filters";

var App = () => {
  return (
    <div>
      <Header />
      <Form />
      <TodosContainer />
      <Filters/>
    </div>
  );
};
export default App;
