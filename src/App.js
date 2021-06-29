import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './Validation';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: '#000000',
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        {/* <MyComponent name="react" favoriteNumber={26}>
          리액트
        </MyComponent>
        <Counter />
        <Say />
        <EventPractice />
        <ValidationSample />
        <div>
          <ScrollBox
            ref={(ref) => {
              this.ScrollBox = ref;
            }}
          />
          <button onClick={() => this.ScrollBox.scrollToBottom()}>
            맨 밑으로
          </button>
        </div> 
        <IterationSample />
        */}
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
