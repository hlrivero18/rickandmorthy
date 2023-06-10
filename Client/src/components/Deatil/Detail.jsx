import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'
import style from './Detail.module.css'

export default function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);


    return (
        <div className={style.container}>
            <div className={style.info}>
                <h1>{character.name}</h1>
                <h3>GENERO  | {character.gender}</h3>
                <h3>ESPECIE | {character.species}</h3>
                <h3>ORIGEN  | {character.origin?.name}</h3>
                <h3>STATUS  | {character.status}</h3>
            </div>
            <img className={style.img} src={character.image} alt="" />
        </div>
    )
}