
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState('')
  const handerChange = (event)=>{
    setName(event.target.value)
  }
  return (
    <div className="container">
      <h1>Personalized Greeting</h1>
        <input 
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handerChange}
        className="input"
         />
         <h2>{name ? `Hello, ${name}!` : ''}</h2>
    </div>
  )
}

export default App
