import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    hello: "hello"
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
          {this.testing()}
        </span>

        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 0 : count;
  }

  testing() {
    const { hello } = this.state;
    return hello;
  }
}

export default Counter;
