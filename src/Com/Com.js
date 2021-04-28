import React from "react";
import './Com.css';
const Com=(props)=>{
    return(
        <div class="div1">
    <h1>hi,My Name is <span id="in">{props.name}</span> and my age is <span id="in">{props.age}</span> years old</h1>
    <p id="p1" onClick={props.delet}>{props.children}</p>
    <label for="name"> name:</label>
    <input id="name" onChange={props.changename }></input>&nbsp;&nbsp;&nbsp;
    <label for="age"> age:</label>
    <input id="age" onChange={props.changeage }></input>
    </div>
    );
}
export default Com;
