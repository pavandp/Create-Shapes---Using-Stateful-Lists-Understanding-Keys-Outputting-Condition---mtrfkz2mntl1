import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
const [shape , setShape] = useState([]);
const [shapeVal , setShapeVal] = useState('square');
const handleSelect = (e) =>{
  setShapeVal(e.target.value);
}
const shapeChange = () =>{

  setShape([...shape ,shapeVal]);
}

  return (
    <div id="main">
      <div id="shape-creator">
        <select value={shapeVal} onChange={handleSelect} >
          <option value='square'>Square</option>
          <option value='circle'>Circle</option>
        </select>
        <button onClick={shapeChange} >Add Shapes</button>
      </div>
      <div id="shapes-holder">
        {shape.map((item,index) => <div className={item}>{index}</div>)}
      </div>
    </div>
  )
}


export default App;