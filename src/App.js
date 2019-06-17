import React from 'react';
import './App.css';
import neighborhoodTreeSrvc from "./services/neighborhoodTreeSrvc";
import Block from "./Block/Block";

function App() {
  console.log(neighborhoodTreeSrvc.lotMapper.get(7));

  return (
    <div className="App">
      <Block data={neighborhoodTreeSrvc.root} />
    </div>
  );
}

export default App;
