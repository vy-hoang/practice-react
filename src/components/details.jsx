import React from "react";

function Details(props){
    const styles = {
        width: "400px",
        height: "150px",
        backgroundColor: "#A3E4D7",
        borderStyle:  'dashed',
        padding: "10px"

    }
    return(
        <div style={styles}>
            <p>{props.color}</p>
            <p>{props.type}</p>
            <p>{props.registration}</p>
            <p>{props.capacity}</p>
        </div>

    );
}

export default Details;