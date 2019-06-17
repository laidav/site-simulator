import React from "react";
import "./Lot.css";
import neighborhoodTreeSrvc from "../services/neighborhoodTreeSrvc";

const Lot = ({ data: lot, selectLot, selectedBlock }) => {
    const handleClick = () => {
        selectLot(lot);
    };

    const isActive = selectedBlock && neighborhoodTreeSrvc.getLots(selectedBlock).indexOf(lot) > -1;

    return (
        <div className={`lot ${isActive ? "active" : "" }`} onClick={handleClick}>
            { lot.value.id }
        </div>
    )
}

export default Lot;