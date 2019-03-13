import React, { Component } from "react";
import { connect } from "react-redux";

class Button extends Component {
  state = {};
  render() {
    return (
      <div className="alert">
        <button
          className="btn btn-lg btn-outline-danger float-left"
          onClick={this.props.AGE_DOWN}
        >
          Decrease
        </button>
        <button
          className="btn btn-lg btn-outline-info float-right"
          onClick={this.props.AGE_UP}
        >
          {" "}
          Increase{" "}
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { Age: state.age };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP" }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN" })
  };
};
export default connect(
  mapDispatchToProps,
  mapStateToProps
)(Button);
