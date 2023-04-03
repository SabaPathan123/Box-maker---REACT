import React from "react";

function Box(props){
    function handleClick(){
        //props.removeTodo(props.id);
        props.removeBox(props.id);
    }

    return(
        <div>
        <div style={{backgroundColor: props.color,
            height: `${props.height}em`,
            width: `${props.width}em`}}>
        </div>
        <button onClick={handleClick}>X</button>
        </div>
    );
}

export default Box;