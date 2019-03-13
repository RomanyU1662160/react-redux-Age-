const initialstate = {
  Angular: 0,
  React: 0,
  Vuejs: 0
};

const myReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "VOTE_REACT":
      return Object.assign({}, state, {
        Angular: state.Angular + 1
      });
    case "Vote_ANGULAR":
      return Object.assign({}, state, {
        Angular: state.Angular + 1
      });
    case "VUE_VOTE":
      return Object.assign({}, state, {
        Vuejs: state.Vuejs + 1
      });
    default:
      return state;
  }
};
export default myReducer;
