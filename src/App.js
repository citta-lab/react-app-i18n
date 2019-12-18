import React from 'react';
import logo from '../src/asset/world_flags_globe_2.gif'
import './App.css';

import { FormattedMessage } from 'react-intl';
import Child from './components/Chid';
import NumberFormat from './components/NumberFormat';
import DateTimeFormat from './components/DateTimeFormat';
import CustomDateFormat from './components/CustomDateFormat';
import CurrencyFormat from './components/CurrencyFormat';
import ButtonExample from './components/ButtonExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="loading..." />
      </header>
      <Child />

      <div className="borderDiv">
        <ButtonExample />
        <NumberFormat />
        <DateTimeFormat />
        <CustomDateFormat />
        <CurrencyFormat />
      </div>

    </div>
  );
}

export default App;
