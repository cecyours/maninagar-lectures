import React, { PureComponent } from "react";

export default class PureClassComponent extends PureComponent {
  render() {
    console.log("i am render at ", new Date());
    return <div>
        {this.props.name}
    </div>;
  }
}
