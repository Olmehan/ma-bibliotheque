import React from "react";

export const FormatDate = (props) => {
    var dateTimeEntree = props.donneesDateTime;
    var date;
    if(dateTimeEntree !== undefined){
        date = dateTimeEntree.substring(0, 10);
    }else{
        date = 'date inconnue';
    }
    
    return (
        <>
            {date}
        </>
    )
}
