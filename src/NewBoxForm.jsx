import React, { useState } from "react";
import {v4 as uuid} from 'uuid';

function NewBoxForm(props){

    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [color, setColor] = useState("");

    function handleChange(evt){
        let name = evt.target.name;
        if(name === 'height'){
            setHeight(evt.target.value);
        }
        else if(name === 'width'){
            setWidth(evt.target.value);
        }
        else if(name === 'color'){
            setColor(evt.target.value);
        }
    }

    function handleClick(evt){
        evt.preventDefault();
        const newBox = {height,width,color,id : uuid()};
        
        props.createBox(newBox);
        setHeight("");
        setWidth("");
        setColor("");
    }

    return(
        <div>
            <form>
                <label htmlFor='height'>Height : </label>
                <input type="text" name="height" id="height" value={height} onChange={handleChange} />
                <label htmlFor='width'>Width : </label>
                <input type="text" name="width" id="width" value={width} onChange={handleChange} />
                <label htmlFor='color'>Color : </label>
                <input type="text" name="color" id="color" value={color} onChange={handleChange} />
                <button onClick={handleClick}>Create Box!</button>
        </form>
        </div>
    );
}

export default NewBoxForm;