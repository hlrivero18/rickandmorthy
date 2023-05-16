import React, { useState, useEffect } from "react";
import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux'

export default function Card(props) {
   const { name, species, status, image, onClose, id, character } = props
   const cerrar = props.onClose
   const myFavorites = useSelector(state => state.myFavorites);
   const dispatch = useDispatch()

   //estado local 
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         dispatch(removeFav(id))
         setIsFav(false)
      }
      if (!isFav) {
         dispatch(addFav(character))
         setIsFav(true)
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         {
           cerrar !== undefined && <button className={style.btn} onClick={() => onClose(id)}>X</button>
         }
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <img className={style.image} src={image} alt='' />
         <Link className={style.link} to={`/detail/${id}`}>
            <h2 className={style.titulo}>{name}</h2>
         </Link>
         <h2 className={style.datos}>{species}</h2>
         <h2 className={style.datos}>{status}</h2>
      </div>
   );
}

//  function mapDispatchToProps(dispatch) {
//    return {
//       addFav: (character) => {
//          dispatch(addFav(character))
//       },
//       removeFav: (id) => {
//          dispatch(removeFav(id))
//       }
//    }
// }

// //  function mapStateToProps(state){
// //    return {
// //       myFavorites: state.myFavorites,
// //    }
// // }

// export  const ConnectedComponent = connect( mapDispatchToProps)(Card)

//const ConnectedComponent = connect(null, mapDispatchToProps)(MyComponent);