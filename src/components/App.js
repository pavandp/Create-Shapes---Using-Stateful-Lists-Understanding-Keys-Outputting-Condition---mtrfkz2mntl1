import React,{useState} from 'react'
import '../styles/App.css';
const App = () => {
  const [selectedShape,setSelectedShape]=useState('square');
  const [shapes,setShapes]=useState([]);

  const handleShapeChange=(Event)=>{
    setSelectedShape(Event.target.value);
  };

  const handleAddShape=()=>{
    setShapes([...shapes,selectedShape]);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <Option value="square">Square</Option>
          <Option value="circle">Circle</Option>
        </select>
        <button onClick={handleAddShape}>Add Shape</button>
      </div>

      <div id="shapes-holder">
        {shapes.map((shape,index)=>{
          <div className={shape}>
            {index}
          </div>
        })}
      </div>
    </div>
  )
}


export default App;
