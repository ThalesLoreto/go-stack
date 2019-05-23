import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class Button extends Component {
  render() {
    return <a href="">Salvar</a>;
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <Button />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
