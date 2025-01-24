import React, { Component } from "react";

export default class ClassComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mohan",
    };
  }

  handleInput = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        ClassComponents
        <hr />
        <input
          className="form-control"
          onChange={this.handleInput}
          value={this.state.name}
        ></input>
        <div>Hello {this.state.name}</div>
      </div>
    );
  }
}
