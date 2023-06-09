import React, { useState } from "react";
import style from './Form.module.css'
import validation from '../Utils/validation.js'

export default function Form({login}) {
    const [userData, setuserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const {name, value} = event.target;
        const newUserData = { ...userData, [name]: value }
        setuserData(newUserData)
        setErrors(validation(newUserData)) 
    }
    const handleLogin = (event)=>{
        event.preventDefault();
        login(userData)
    }

    return (
        <div className={style.container}>
            <form className={style.containerForm} action="" onSubmit={handleLogin}>
                <h3>Bienvenido!!</h3>
                <img className={style.formImg} src="https://staticdelivery.nexusmods.com/mods/1151/images/528-0-1447526230.png" alt="rick-y-morthy" />
                <div>
                    {/* <label htmlFor="email"> Email</label> */}
                    <input 
                    className={style.formInput} 
                    type="text" value={userData.email} 
                    name="email" 
                    placeholder=" Ingresa tu email" 
                    onChange={handleChange} 
                    autoComplete="off"/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    {/* <label htmlFor="password">Contraseña</label> */}
                    <input 
                    className={style.formInput} 
                    type='password' 
                    value={userData.password} 
                    name="password" 
                    placeholder="Ingresa tu contraseña" 
                    onChange={handleChange} />
                    {errors.password && <span>{errors.password}</span>}
                </div>

                <button className={style.formButton} type="submit">Iniciar sesion</button>
            </form>

        </div>
    )
}