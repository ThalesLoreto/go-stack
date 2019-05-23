import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class Button extends Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

class App extends Component {
  handleClick() {
    alert("Botão enviar clicado!");
  }

  render() {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <Button
          onClick={() => {
            alert("Botão Salvar");
          }}
        />
        <br />
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
