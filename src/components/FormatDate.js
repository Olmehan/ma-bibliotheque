import React from "react";

export const FormatDate = (props) => {
    var dateTimeEntree = props.donneesDateTime;
    var date = dateTimeEntree.substring(0, 10);
    return (
        <>
            {date}
        </>
    )
}
