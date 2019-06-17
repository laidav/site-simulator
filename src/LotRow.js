import React from "react";
import List from "./List";
import Lot from "./Lot";

const LotRow = ({ data: lotRow }) => {
    return (
        <div>
            <List component={ Lot }
                  className={`lotRow lotrow-${lotRow.className}`}
                  uniqueKey={"id"}
                  list={lotRow.toArray()}
            />  
        </div>
    )
}

export default LotRow;