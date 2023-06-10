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


   // const onSearch = (id) => {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // };

   async function onSearch(id) {
      try {
         const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         const { data } = response
         return setCharacters([...characters, data])
      } catch {
         window.alert('¡No hay personajes con este ID!');
      }
   }
   const onClose = (id) => {
      setCharacters(characters.filter(character => { return character.id !== id }))
   };
   const { pathname } = useLocation();
   const navigate = useNavigate()


   const [access, setAccess] = useState(false)

   async function login(userData) {
      try{
         const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const response = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = response.data
      setAccess(response.data)
      access && navigate('/home')
      }
      catch(error){
         console.log(error)
      }
      
   }

   const logout = () => {
      setAccess(false)
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])


   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
         <Routes>
            <Route path='/' element={
               <Form login={login} />
            } />
            <Route path='/home' element={
               <Cards characters={characters} onClose={onClose} />
            } />
            <Route path='/about' Component={About} />
            <Route path='/detail/:id' Component={Detail} />
            <Route path='/favorites' Component={Favorite} />
            <Route path='/not-found' Component={Error404} />
            <Route path='*' element={<Navigate to='/not-found' />} />
         </Routes>
      </div>

   );
}


export default App;
