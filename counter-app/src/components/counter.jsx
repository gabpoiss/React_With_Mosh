import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // };

  // constructor(props) {
  //   super(props);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
  }

  componentWillUnmount() {
    // console.log("Counter - Unmount");
  }

  handleButtonDisableBadge() {
    let btnDisable = "btn btn-sm btn-";
    btnDisable += this.props.counter.value === 0 ? "secondary" : "dark";
    return btnDisable;
  }
  render() {
    // console.log("Counter - Rendered");
    return (
      <div className="row">
        <div className="col">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-dark btn-sm"
          >
            +
          </button>
        </div>

        <div className="col">
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className={this.handleButtonDisableBadge()}
          >
            -
          </button>
        </div>

        <div className="col">
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  // handleIncrement = product => {
  //   // this.setState changes the properties in the state and lets know React.
  //   this.setState({ value: this.state.value + 1 });
  // };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 0 : value;
  }
}

export default Counter;
