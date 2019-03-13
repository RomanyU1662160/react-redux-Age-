const initialState = {
  Age: 40,
  history: []
};

const myReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "AGE_UP":
      return Object.assign({}, state, {
        Age: state.Age + action.payload.value,
        history: state.history.concat({
          id: Date.now(),
          Age: state.Age + action.payload.value
        })
      });

      break;
    case "AGE_DOWN":
      return Object.assign({}, state, {
        Age: state.Age - action.payload.value,
        history: state.history.concat({
          id: Date.now(),
          Age: state.Age - action.payload.value
        })
      });
      break;
    case "DELETE_ITEM":
      return Object.assign({}, state, {
        history: state.history.filter(el => {
          return el.id !== action.key;
        })
      });
      break;
    default:
      return state;
  }
};
export default myReducer;
