import React, { Component } from 'react';
import './App.css';
import neighborhoodTreeSrvc from "./services/neighborhoodTreeSrvc";
import Block from "./Block/Block";

class App extends Component {

  state = {
    selectedLot: null,
    selectedBlock: null
  }

  selectLot = (lot) => {
    this.setState({
      selectedLot: lot
    });
  };

  render() {

    const { selectLot } = this;
    const { selectedLot } = this.state;

    return (
      <div className="App">
        <Block data={neighborhoodTreeSrvc.root} selectLot={selectLot} />
        { 
          selectedLot &&         
          <div className="selected-lot">
            <p>Selected Lot: { selectedLot.value.id }</p>
            <p></p>
          </div> 
        }
      </div>
    );
  } 
}

export default App;
