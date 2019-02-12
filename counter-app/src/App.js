import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // constructor() {
  //   super();
  //   // console.log("App - Constructor");
  //   // this.state = this.props.something;
  // }

  componentDidMount() {
    // AJAX call
    // console.log("App - mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = counterID => {
    // console.log("Event handle Delete Called", counterID);
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: counters });
  };

  handleDecrement = counterDecrement => {
    console.log(counterDecrement);
    const counters = this.state.counters.map(c => {
      if (c.id === counterDecrement.id) c.value = c.value - 1;
      return c;
    });
    this.setState({ counters: counters });
  };

  render() {
    // console.log("App - Rendered");
    return (
      <React.Fragment>
        <main className="container">
          <Navbar
            totalCounters={this.state.counters.filter(c => c.value > 0).length}
          />
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
