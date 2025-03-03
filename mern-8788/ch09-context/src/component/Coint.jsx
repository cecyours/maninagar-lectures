import React, { Component } from "react";
import { MyInputContext } from "../context/MyInputContext";

export default class Coint extends Component {
  static contextType = MyInputContext;

  render() {
    console.log("My input : ", this.context.input);
    return <div>Coint {this.context.input}</div>;
  }
}
