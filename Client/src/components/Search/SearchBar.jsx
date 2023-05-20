import { useState } from 'react';
import style from './Search.module.css';
import {Link} from 'react-router-dom'

export default function SearchBar(props) {
   const { onSearch } = props;

   const [id, setId] = useState('');
   const handleChange = (event) => {
      const { value } = event.target;
      setId(value);
   };
   const handleSearch = () => {
      onSearch(id);
      setId('')
   }


   return (
      <div className={style.container}>
         <input
            className={style.input}
            placeholder='Agrega un numero del 1 al 826...'
            type='search'
            onChange={handleChange}
            value={id}
         />
         <Link to='/home'>
            <button
            className={style.boton}
            onClick={handleSearch}

         >Agregar</button>
         </Link>
         
      </div>
   );
}
