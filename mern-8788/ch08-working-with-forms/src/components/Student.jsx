import React, { Component } from "react";
import Result from "./Result";

// rcc : react class component
// rfc : react function component
class Student extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between border rounded-3 p-2 w-50 mt-3">
        <div>{this.props.name}</div>
        <div>{this.props.subject}</div>
        <div>
          <Result marks={this.props.marks} />
        </div>
      </div>
    );
  }
}

Student.defaultProps = {
  name: "Mohan",
  subject: "C language",
  marks: 0,
};

export default Student;
