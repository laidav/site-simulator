import React from "react";
import neighborhoodTreeSrvc from "../services/neighborhoodTreeSrvc";
import List from "../List";
import LotRow from "../LotRow/LotRow";
import "./Block.css";

const Block = ({ data: blockNode, selectLot, selectBlock, selectedBlock }) => {
    const handleClick = () => {
      selectBlock(blockNode);
    }

    return (
        <div className={`block ${blockNode.value.className}`}>  
          <h1 onClick={handleClick}>{blockNode.value.name}</h1>
          <List component={LotRow}
                uniqueKey={"id"}
                list={blockNode.value.lotRows}
                listItemProps={{selectLot, selectedBlock }}
          />  
          <List
            component={Block}
            uniqueKey={"id"}
            list={neighborhoodTreeSrvc.getChildren(blockNode)}
            listItemProps={{selectLot, selectBlock, selectedBlock}}
          />
        </div>
      ); 
}

export default Block;