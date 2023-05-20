import React from "react";
import style from './Random.module.css'
import {Link} from 'react-router-dom'

export default function Random({onSearch}) {
    const handleRandom = () => {
        const randomNumber = Math.floor(Math.random() * (826 - 1 + 1)) + 1;
        onSearch(randomNumber)
        
    }

    return(
        <div>
            <Link to='/home'>
                <button className={style.btn} onClick={handleRandom}>RANDOM!</button>
            </Link>
        </div>
    )
}