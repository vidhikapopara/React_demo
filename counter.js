import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.number);
    console.log(this.props.number);
    if (prevProps.number !== this.props.number) {
      console.log("coponent : updated");
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}
export default Counter;
