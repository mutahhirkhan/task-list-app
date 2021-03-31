import { SEARCH_FILTER, SET_FILTER_STATUS } from "./filterConstants";

export var setFilterStatus = (status) => ({
  type: SET_FILTER_STATUS,
  payload: {
    status,
  },
});

export var searchFilter = (value) => ({
  type: SEARCH_FILTER,
  payload: {
    value,
  },
});
