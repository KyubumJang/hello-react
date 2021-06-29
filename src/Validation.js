import React, { Component } from 'react';
import './Validation.css';
export default class Validation extends React.Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
      password: '',
    });
    this.input.focus();
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleButtonClick();
    }
  };

  render() {
    return (
      <React.Fragment>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </React.Fragment>
    );
  }
}
