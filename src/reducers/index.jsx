const initialState = {
  Age: 40
};

const myReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "AGE_UP":
      return Object.assign({}, state, {
        Age: state.Age + 1
      });
    case "AGE_DOWN":
      return Object.assign({}, state, {
        Age: state.Age - 1
      });
    default:
      return state;
  }
};
export default myReducer;
