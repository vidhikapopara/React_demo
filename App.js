import React, { Component } from "react";
import FunCounter from "./components/FunCounter";
//import Counter from "./components/counter";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componetDidMount : When component use first time");
  }

  componentWillUnmount() {
    console.log("componnetWillUnmount : when component remove");
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        {/* <Counter number={this.state.count}></Counter> */}
        <FunCounter number={this.state.count}></FunCounter>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}
