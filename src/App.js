import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./models/LotRow"
import LotRow from './models/LotRow';
import BlockNode from "./models/BlockNode";

function App() {
  const lotRow = new LotRow();
  const blockNode = new BlockNode();

  lotRow.append(3);
  lotRow.append(4);

  console.log(lotRow);
  console.log(blockNode);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
