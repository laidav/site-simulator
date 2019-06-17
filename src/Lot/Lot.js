import React from "react";
import "./Lot.css";

const Lot = ({ data: lot, selectLot }) => {
    const handleClick = () => {
        selectLot(lot);
    };

    return (
        <div className={"lot"} onClick={handleClick}>
            { lot.value.id }
        </div>
    )
}

export default Lot;