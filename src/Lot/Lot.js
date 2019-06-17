import React from "react";
import "./Lot.css";

const Lot = ({ data: lot }) => {
    return (
        <div className={"lot"}>
            { lot.value.id }
        </div>
    )
}

export default Lot;