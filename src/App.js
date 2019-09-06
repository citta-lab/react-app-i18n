import React from 'react';
import logo from './logo.svg';
import './App.css';

import { FormattedMessage } from 'react-intl';
import Child from './components/Chid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormattedMessage id='greeting'></FormattedMessage>
      </header>
      <Child />
    </div>
  );
}

export default App;
