import React from "react";

const Lot = ({ data: lot }) => {
    return (
        <div className={"lot"}>
            { lot.value.id }
        </div>
    )
}

export default Lot;