import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
// import {Link} from 'react-router-dom'
import style from './Favorite.module.css'
import Card from '../Card/Card'
import { filterCards, orderCards } from '../../redux/action'

function Favorite(props) {
    //const myFavorites = useSelector(state => state.myFavorites)
    const [aux, setAux] = useState(false)
    const { myFavorites } = props
    const dispatch = useDispatch()

    const handleOrder = (event) =>{
        const {value} = event.target;
        dispatch(orderCards(value))
        setAux(true)
    }

    const handleFilter = (event) => {
        const {value} = event.target;
        dispatch(filterCards(value))
    }

    return (
        <div className={style.container}>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            {myFavorites.map((personaje) =>
                <Card
                    key={personaje.id}
                    id={personaje.id}
                    name={personaje.name}
                    status={personaje.status}
                    species={personaje.species}
                    image={personaje.image}
                >
                </Card>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorite)
