import { SEARCH_FILTER, SET_FILTER_STATUS } from "./filterConstants";

var initialState = {
  status: "all",
  value: "",
};

var filterReducer = (state = initialState, action) => {
  var { type, payload } = action;
  // return state
  switch (type) {
    case SET_FILTER_STATUS:
      return {
        ...state,
        status: payload.status,
      };

    case SEARCH_FILTER:
      return {
        ...state,
        value: payload.value,
      };

    default:
      return state;
  }
};

export default filterReducer;
