import React from "react";
import '../App.css'
import '../index.css'
const Card = (props) => {
    return (
        <div>
           <h1 className="text-blue-500">User Name Is : {props.username}</h1>
        </div>
    )
}

export default Card