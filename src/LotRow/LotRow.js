import React from "react";
import List from "../List";
import Lot from "../Lot/Lot";
import "./LotRow.css";

const LotRow = ({ data: lotRow, selectLot }) => {
    return (
        <div>
            <List component={ Lot }
                  className={`lot-row lot-row-${lotRow.className}`}
                  uniqueKey={"id"}
                  list={lotRow.toArray()}
                  listItemProps={{ selectLot }}
            />  
        </div>
    )
}

export default LotRow;