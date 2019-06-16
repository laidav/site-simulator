import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./models/LotRow"
import LotRow from './models/LotRow';
import BlockNode from "./models/BlockNode";
import lotRows from "./services/lotRowsSrvc"

function App() {
  console.log(lotRows);

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
