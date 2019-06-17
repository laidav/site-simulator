import React from 'react';
import './App.css';
import neighborhoodTreeSrvc from "./services/neighborhoodTreeSrvc";
import Block from "./Block"

function App() {
  console.log(neighborhoodTreeSrvc);
  console.log(neighborhoodTreeSrvc.getLots(neighborhoodTreeSrvc.root));

  return (
    <div className="App">
      <Block data={neighborhoodTreeSrvc.root} />
    </div>
  );
}

export default App;
