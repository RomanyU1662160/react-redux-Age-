import React, { Component } from "react";
import { connect } from "react-redux";

class AgeLabel extends Component {
  state = {
    Age: 20,
    History: []
  };
  render() {
    return (
      <div className="alert">
        <span className="badge">Age : {this.props.Age} </span>
        <div className="alert">
          <button
            className="btn btn-lg btn-outline-danger float-left"
            onClick={this.props.onAgeDown}
          >
            Decrease
          </button>
          <button
            className="btn btn-lg btn-outline-info float-right"
            onClick={this.props.onAgeUp}
          >
            Increase
          </button>
        </div>
        <div className="alert">
          <ul>
            {this.props.History.map(el => (
              <li
                key={el.id}
                className="alert-info border m-2"
                onClick={() => this.props.DelItem(el.id)}
              >
                {el.Age} :: {el.id}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Age: state.Age,
    History: state.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", payload: { value: 2 } }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", payload: { value: 1 } }),
    DelItem: id => dispatch({ type: "DELETE_ITEM", key: id })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgeLabel);
