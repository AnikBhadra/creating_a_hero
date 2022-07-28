import React, { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [superpower, setSuperPower] = useState("")


  const changeName = () => {
    setName("Bhadra")
  }

  return (
    <div >
      <h1>Build A Hero</h1>
      <label>Name:</label>
      <input type="text" style={{ margin: 10 }}
        onChange={(event) => {
          setName(event.target.value)
        }} />

      <label>Age:</label>
      <input type="number" style={{ margin: 10 }}
        onChange={(event) => {
          setAge(event.target.value)
        }}
      />

      <label>Height:</label>
      <input type="text" style={{ margin: 10 }}
        onChange={(event) => {
          setHeight(event.target.value)
        }}
      />

      <label>SuperPower:</label>
      <input type="text" style={{ margin: 10 }}
        onChange={(event) => {
          setSuperPower(event.target.value)
        }}
      />

      <button onClick={changeName}>change name</button>
      {name}
      {age}
      {height}
      {superpower}
    </div>
  )
}

export default App
