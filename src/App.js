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
        <div className={"selected-lot"}>
        <h2>Selected Lot:</h2>
        { 
          selectedLot &&         
          <div>
            <p>Lot Number: { selectedLot.value.id }</p>
            <p>Lot Across: { selectedLot.across ? selectedLot.across.value.id : "null" }</p>
            <p>Lot Diagonal: { selectedLot.across && selectedLot.across.previous ? selectedLot.across.previous.value.id : "null" }</p>
            <p>Lot Diagonal: { selectedLot.across && selectedLot.across.next ? selectedLot.across.next.value.id : "null" }</p>
          </div> 
        }

        </div>
      </div>
    );
  } 
}

export default App;
