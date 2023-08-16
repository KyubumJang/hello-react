import './App.css';

import * as D from './data';

import React from 'react';

function App() {
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height={50} alt="randomAvatar" />
      <img src={D.randomImage()} height={300} alt="randomImage" />
    </div>
  );
}

export default App;
