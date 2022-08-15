import React from "react";
import "../style.css";
import { useState } from "react";

function Counter(){
    let count=0;
    const [currentstate,updatestate] = useState(count);
    const handleClick = () =>{
     updatestate(currentstate+1);
    }
    return(
        <>
        <div className="main-counter-button">
        <div className="main-counter">
        <h1>Counter </h1>
        <button onClick={handleClick}>{currentstate}</button>
        </div>
        </div>
        </>
    );
}
export default Counter;