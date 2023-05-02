import React from "react";
import ava from "../../../img/elon.jpg"

const Profilinfo = (props) =>{
    return (
        <div className="me">
            <img src={ava} alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default Profilinfo;