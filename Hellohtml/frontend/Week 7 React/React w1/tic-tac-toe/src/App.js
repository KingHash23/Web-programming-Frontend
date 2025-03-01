import {useState} from 'react';
import "./App.css";

//COMPONETS
//how to use a props
function Square({ value }) {
  const[name,setName]= useState(null);

  function handleButtonClick() {
    setName("x");
    console.log("clicked!", NamedNodeMap);
  }
  return (
    <button onClick={handleButtonClick} className="square">
      {name}
    </button>
  );
}

function App() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="" />
        <Square value="" />
        <Square value="" />
      </div>
      <div className="board-row">
        <Square value="" />
        <Square value="" />
        <Square value="" />
      </div>
    </>
  );
}

export default App;