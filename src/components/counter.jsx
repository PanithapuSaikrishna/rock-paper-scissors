import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  state = {
    // counter: this.props.counter.value, //This peice of code is executed once when we created this counter comp
    imageUrl: "https://picsum.photos/200",
  };
  h1Style = {
    fontSize: 40,
  };
  tags = ["tag1", "tag2", "tag3"];
  render() {
    let classes = this.getBadgeColor();
    const { onIncrement, onDelete, counter } = this.props; // Object destructuring
    return (
      //   <React.Fragment>
      <div className="body">
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <h1 style={this.h1Style}>Hello World</h1> */}
        <span className={classes}>{this.getCounter()}</span>
        <span className="badge bg-success m-2">Active</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-outline-primary m-2 btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <div>{this.renderList()}</div> */}
      </div>

      //   </React.Fragment>
    );
  }

  implementationRPS() {
    const gameRules = {
      rock: {
        beats: "scissors",
      },
      paper: {
        beats: "rock",
      },
      scissors: {
        beats: "paper",
      },
    };
    const user1 = "rock";
    const user2 = "scissors";

    if (gameRules[user1].beats === user2) {
      return "User1 wins";
    } else if (gameRules[user2].beats === user1) {
      return "User2 wins";
    }
    return "Game tie";
  }

  checkIfPlayerIsWinner(user1, user2) {
    return (
      (user1 === "rock" && user2 === "scissors") ||
      (user1 === "paper" && user2 === "rock") ||
      (user1 === "scissors" && user2 === "paper")
    );
  }

  renderList() {
    if (this.tags.length === 0) return <sapn>There is no single tag!</sapn>;
    return (
      <ul>
        {this.tags.map((tag, index) => (
          <li key={index}>
            <span className="badge bg-primary">{tag}</span>
          </li>
        ))}
      </ul>
    );
  }
  getBadgeColor() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
