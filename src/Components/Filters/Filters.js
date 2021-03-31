import React from "react";
import { connect } from "react-redux";
import {
  setFilterStatus,
  searchFilter,
} from "./../../Redux/Filters/filterAction";

class Filters extends React.Component {
  state = {
    value: "",
  };

  render = () => {
    var { setFilterStatus, searchFilter } = this.props;
    // console.log(this.state.value + "state value");
    return (
      <div>
        <input
          onChange={(e) => {
            this.setState({ value: e.target.value });
            searchFilter(e.target.value);
          }}
          type="text"
          placeholder="SEARCH TASK"
          value={this.state.value}
        ></input>{" "}
        {""}
        <button
          onClick={(e) => {
            setFilterStatus("all");
          }}
        >
          All
        </button>{" "}
        {""}
        <button
          onClick={() => {
            setFilterStatus("active");
          }}
        >
          Active
        </button>{" "}
        {""}
        <button
          onClick={() => {
            setFilterStatus("completed");
          }}
        >
          Completed
        </button>{" "}
        {""}
      </div>
    );
  };
}

// var mapState = (state) => ({
//   value: state.filters.value,
// });

var actions = {
  setFilterStatus,
  searchFilter,
};

export default connect(null, actions)(Filters);
