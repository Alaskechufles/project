import { Fragment } from 'react'
import './face.css'
import Tarjeta from './tarjeta/Tarjeta'
import SearchIcon from '../icons/SearchIcon';
import Logo from './Logo'
/* import { useState, useEffect } from 'react'; */

export default function Face(prop) {



    const filtrados = prop.ele
    return (
        <Fragment>
            <nav className='nav'>
                <div className='box-icon'>
                    <Logo />
                </div>
                <button className='buscador' onClick={prop.toggle} >
                    <p className='location'>Add location</p>
                    <p className='guests'>Add guests</p>
                    <div className='box-lupa'>
                        <SearchIcon />
                    </div>
                </button>
            </nav>
            <div className="head-face">
                <h1 className="subtitle-face">Stays in Finland</h1>
                <p className="number-face">12+ stays</p>
            </div>
            <div className="tarjetas">
                {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
                {filtrados.map((el, i) => {
                    return (
                        <div className="tarjeta" key={i}>
                            <Tarjeta imgs={el.photo} content={el.type} rate={el.rating} descript={el.title} super={el.superHost} bed={el.beds} />
                        </div>
                    )
                })}
            </div>
        </Fragment>

    )
}
