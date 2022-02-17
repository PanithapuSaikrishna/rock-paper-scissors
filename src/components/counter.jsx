import React, { Component } from "react";
import "./counter.css";
class Counter extends Component {
  state = {
    counter: 10,
    imageUrl: "https://picsum.photos/400",
  };
  h1Style = {
    fontSize: 40,
  };
  tags = ["tag1", "tag2", "tag3"];
  render() {
    let classes = this.getBadgeColor();
    return (
      //   <React.Fragment>
      <div className="body">
        <img src={this.state.imageUrl} alt="" />
        <h1 style={this.h1Style}>Hello World</h1>
        <span className={classes}>{this.getCounter()}</span>
        <span className="badge bg-success m-2">Active</span>
        <button
          onClick={() => this.handleClick({ id: 1 })}
          className="btn btn-outline-primary m-2 btn-sm"
        >
          Increment
        </button>
        <div>{this.renderList()}</div>
      </div>

      //   </React.Fragment>
    );
  }

  handleClick(id) {
    console.log(id);
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  renderList() {
    // console.log(this.state.counter);
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
    classes += this.state.counter === 0 ? "warning" : "primary";
    return classes;
  }

  getCounter() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}

export default Counter;
