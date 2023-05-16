import React from "react";
import style from './Error404.module.css'
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className={style.body}>
            <div className={style.space}></div>
            <div className={style.wrapper}>
                <div className="img-wrapper">
                    <span className={style.span}>44</span>
                </div>
                <p className={style.p}>La página que intenta buscar <br/> ha sido trasladado a otro universo.</p>
                <Link to='/home'>
                    <button className={style.button} type="button">IR AL INICIO</button>
                </Link>
                
            </div>
        </div>
    )
} 

export default Error;