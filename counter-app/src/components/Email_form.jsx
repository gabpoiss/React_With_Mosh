import React, { Component } from "react";

class Email extends Component {
  state = {};
  render() {
    return (
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> */}
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
    );
  }
}

export default Email;
