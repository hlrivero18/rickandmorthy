import React from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const {characters, onClose} = props;
   return (
      <div className={style.container}>
         {characters.map((personaje)=>
         <Card 
            key={personaje.id}
            id={personaje.id} 
            name= {personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}
            image={personaje.image}
            onClose={onClose}
            character={personaje}
            >         
         </Card>
         )}
      </div>
   )
}
