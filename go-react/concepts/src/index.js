import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';

import './style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    screen;
    this.setState({ counter: (this.state.counter += 1) });
  };

  render() {
    return (
      <Fragment>
        <h1 className="title">Hello World</h1>
        <h1 style={{ color: '#f00' }}>{this.state.counter}</h1>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
