import React, { useState } from "react";
import Box from './Box.jsx';
import NewBoxForm from './NewBoxForm.jsx';
//import {v4 as uuid} from 'uuid';


function BoxList(){

    const [boxes, setBoxes] = useState([]);

    //console.log(boxes);
    const allBoxes = boxes.map(box => 
    <Box key={box.id} 
        id={box.id} 
        width={box.width}
        height={box.height} 
        color={box.color} 
        removeBox={remove}
     />);
    

    function create(newBox){
        setBoxes(prevVal =>  
            {  return [...prevVal,newBox];
          });
    }

    function remove(id){
       
        setBoxes(() => {
            return boxes.filter(box => box.id !== id)
        });
    }

    return (
    <div>
        <h1>Color box maker</h1>
        {allBoxes}
        <NewBoxForm createBox={create} />
    </div>);
}

export default BoxList;