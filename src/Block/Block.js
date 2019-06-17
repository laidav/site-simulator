import React from "react";
import neighborhoodTreeSrvc from "../services/neighborhoodTreeSrvc";
import List from "../List";
import LotRow from "../LotRow/LotRow";

const Block = ({ data: blockNode }) => {
    return (
        <div className={blockNode.value.className}>  
          <h1>{blockNode.value.name}</h1>
          <List component={LotRow}
                uniqueKey={"id"}
                list={blockNode.value.lotRows}
          />  
          <List
            component={Block}
            uniqueKey={"id"}
            list={neighborhoodTreeSrvc.getChildren(blockNode)}
          />
        </div>
      ); 
}

export default Block;