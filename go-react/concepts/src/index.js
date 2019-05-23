import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: (this.state.counter += 1) });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <h1>{this.state.counter}</h1>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
