import React, { Component } from "react";
import { connect } from "react-redux";

class AgeLabel extends Component {
  state = {
    Age: 20
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { Age: state.Age };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP" }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgeLabel);
