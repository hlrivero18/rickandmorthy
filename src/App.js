//React
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
//componentes y estilos
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Deatil/Detail';
import Form from './components/Form/Form'
import Error404 from './components/Error404/Error404'
import Favorite from './components/Favorite/Favorite'
//backend
import axios from 'axios';

function App() {

   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };
   const onClose = (id) => {
      setCharacters(characters.filter(character => { return character.id !== Number(id) }))
   };
   const {pathname} = useLocation();
   const navigate = useNavigate()
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'password12'

   const login = (userData) => {
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true)
         navigate('/home')
      }
   }

   const logout = () => {
      setAccess(false)
   }

   useEffect(()=> {
      !access && navigate('/')
   }, [access])


   return (
      <div className='App'>
         {pathname !=='/' && <Nav onSearch={onSearch} logout={logout}/>}
         <Routes>
            <Route path='/' element={
               <Form login={login}/>
               }/>
            <Route path='/home' element={
               <Cards characters={characters} onClose={onClose} />
            }/>
            <Route path='/about' Component={About}/>
            <Route path='/detail/:id' Component={Detail}/>
            <Route path='/favorites' Component={Favorite}/>
            <Route path='/not-found' Component={Error404}/>
            <Route path='*' element={<Navigate to='/not-found'/>}/>
         </Routes>
      </div>

   );
}


export default App;
