//import { Component } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react'


function App () {
  const [characters, setCharacters] = useState([]);
  
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "d58fbb903a0e.f78899d1002d097eb4c9";
    
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.name && !characters.find((char) => char.id === data.id)){
        setCharacters((oldChars) => [...oldChars, data])
        //es lo mismo= setCharacters([...characters, data]);
      }else{
        window.alert("No hay personajes con ese ID");
      }
    })
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))
  }
  
  return (
    <div className='App' style={{ padding: '25px' }}>
        <Nav onSearch={onSearch}/>
        <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}

export default App
