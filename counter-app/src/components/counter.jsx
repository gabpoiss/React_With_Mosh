import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  // constructor(props) {
  //   super(props);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = product => {
    // this.setState changes the properties in the state and lets know React.
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 0 : value;
  }
}

export default Counter;
