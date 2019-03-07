import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
// import Tmovies from "./components/Testing_my_learning";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <main className="container" id="App" style={{ paddingTop: 40 }}>
          <Movies />
        </main>
        {/* <Tmovies /> */}
      </div>
    );
  }
}

export default App;
