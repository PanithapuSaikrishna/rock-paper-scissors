import * as React from "react";
// import { Component } from "react";
interface CounterProps {}

interface CounterState {
  initial: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  state = {
    initial: 0,
  };
  render() {
    return <span>{this.state.initial}</span>;
  }
}

export default Counter;
