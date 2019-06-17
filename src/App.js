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

  selectBlock = (block) => {
    this.setState({
      selectedBlock: block
    })
  };

  render() {

    const { selectLot, selectBlock } = this;
    const { selectedLot, selectedBlock } = this.state;

    return (
      <div className="App">
        <Block data={neighborhoodTreeSrvc.root} 
               selectLot={selectLot} 
               selectBlock={selectBlock} 
               selectedBlock={selectedBlock} />
        <p className={"explainer"}>* click one of the lots or block titles to select</p>
        <div className={"selected-block"}>
          <h2>Selected Block:</h2>
          {
            selectedBlock && <p>Block Name: {selectedBlock.value.name} </p>
          }
        </div>
        <div className={"selected-lot"}>
        <h2>Selected Lot:</h2>
        { 
          selectedLot &&         
          <div>
            <p>Lot Number: { selectedLot.value.id }</p>
            <p>Lot Across: { selectedLot.across ? selectedLot.across.value.id : "null" }</p>
            <p>Lot Diagonal: { selectedLot.across && selectedLot.across.previous ? selectedLot.across.previous.value.id : "null" }</p>
            <p>Lot Diagonal: { selectedLot.across && selectedLot.across.next ? selectedLot.across.next.value.id : "null" }</p>
            <p>2 Left Neighbors: { selectedLot.getLeftTwoNeighbors().map((node) => { return node.value.id}).join(",")}</p>
            <p>2 Right Neighbors: { selectedLot.getRightTwoNeighbors().map((node) => { return node.value.id}).join(",")}</p>
          </div> 
        }

        </div>
      </div>
    );
  } 
}

export default App;
