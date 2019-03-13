const initialState = {


const myReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "AGE_UP":
      return Object.assign({}, state, {

    default:
      return state;
  }
};
export default myReducer;
