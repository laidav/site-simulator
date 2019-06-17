import React from 'react';
import './App.css';
import neighborhoodTreeSrvc from "./services/neighborhoodTreeSrvc";
import Block from "./Block"

function App() {
  console.log(neighborhoodTreeSrvc);

  return (
    <div className="App">
      <Block data={neighborhoodTreeSrvc.root} />
    </div>
  );
}

export default App;
