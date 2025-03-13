import { PureComponent } from "react";

class PureComponents extends PureComponent {
  render() {
    return <h1>This is Pure Components {this.props.count} </h1>;
  }
}

export default PureComponents;
