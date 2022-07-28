import React, { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("anik")


  const changeName = () => {
    setName("Bhadra")
  }

  return (
    <div >
      <h1>Build A Hero</h1>
      <label>Name:</label>
      <input type="text" style={{ margin: 10 }} />

      <label>Age:</label>
      <input type="number" style={{ margin: 10 }} />

      <label>Height:</label>
      <input type="text" style={{ margin: 10 }} />

      <label>SuperPower:</label>
      <input type="text" style={{ margin: 10 }} />

      <button onClick={changeName}>change name</button>
      {name}
    </div>
  )
}

export default App
