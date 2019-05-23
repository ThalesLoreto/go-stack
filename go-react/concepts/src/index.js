import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

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
