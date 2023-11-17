import React,{useState} from 'react'
import '../styles/App.css';
const App = () => {
  const [selectedShape,setSelectedShape]=useState('Square');
  const [shapes,setShapes]=useState([]);

  const handleShapeChange=(Event)=>{
    setSelectedShape(Event.target.value);
  };

  const handleAddShape=()=>{
    const id=new Date().getTime();
    const newShape={
      id,type:selectedShape,
    }
    setShapes([...shapes,newShape]);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <Option value={Square}>Square</Option>
          <Option value={Circle}>Circle</Option>
        </select>
        <button onClick={handleAddShape}>Add Shape</button>
      </div>

      <div id="shapes-holder">
        {shapes.map((shape)=>{
          <div key={shape.id} className={shape.type.toLowerCase()}>
            {shape.type} {shape.id}
          </div>
        })}
      </div>
    </div>
  )
}


export default App;
