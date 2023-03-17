//import { Component } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favoritos/Favoritos'


function App () {
  const [characters, setCharacters] = useState([]);//HOOK
  
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "d58fbb903a0e.f78899d1002d097eb4c9";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }
    
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.name){
        setCharacters((oldChars) => [...oldChars, data])
        //es lo mismo= setCharacters([...characters, data]);
      }else{
        window.alert("No hay personajes con ese ID");
      }
    })
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))
  };

  const { pathname } = useLocation(); //HOOK

  const [access, setAccess] = useState(false);
  const username = "josefinaecio@gmail.com";
  const password = "posible128";
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("El nombre de usuario y/o contraseña es incorrecto, Por favor intenta de nuevo.");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

 
  return (
    
    <div className='App' style={{ padding: '25px' }}>
        {pathname !== "/" && <Nav onSearch={onSearch}/>}
        <Routes>
          <Route path='/' element={<Form login={login}/>} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path="/detail/:detailId" element={<Detail/>} />
        </Routes>
    </div>
   
  )
}

export default App
