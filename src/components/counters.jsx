import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handelDelete = (counterId) => {
    console.log("Event handler called", counterId);
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters }, () => {
      this.props.onUpdateCounters(
        this.state.counters.filter((c) => c.value > 0).length
      );
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters }, () => {
      this.props.onUpdateCounters(
        this.state.counters.filter((c) => c.value > 0).length
      );
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters }, () => {
      this.props.onUpdateCounters(
        this.state.counters.filter((c) => c.value > 0).length
      );
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("Updated");
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.handelDelete}
              onIncrement={this.handleIncrement}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
