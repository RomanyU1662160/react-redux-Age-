import React, { Component } from "react";
import { connect } from "react-redux";

class AgeLabel extends Component {
  state = {

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



const mapDispatchToProps = dispatch => {
  return {

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgeLabel);
