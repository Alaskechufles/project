import { Fragment } from 'react'
import './face.css'
import Tarjeta from './tarjeta/Tarjeta'
import SearchIcon from '../icons/SearchIcon';
import Logo from './Logo'
import { useState, useEffect } from 'react';

export default function Face(prop) {

    // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
    const [data, setData] = useState([]);

    // Función para traer los datos de "stays.json".
    const getData = async () => {
        // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
        try {
            const res = await fetch("stays.json");
            const resJson = await res.json();
            // Aquí guardamos los datos de "stays.json" en la variable data.
            setData(resJson);
        } catch (error) {
            console.log(error);
        }
    };

    // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
    useEffect(() => {
        getData();
    }, []);

    // Puedes ver la variable data en consola.
    console.log(data);

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
                {data.map((el, i) => {
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
