import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import MyReducer from "./reducers";
import "./styles.css";
import AgeLabel from "./components/AgeLabel.jsx";

const store = createStore(MyReducer);

function App() {
  return (
    <div className="App">
      <h1 className="text-info text-center">Redux </h1>
      <AgeLabel> </AgeLabel>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
