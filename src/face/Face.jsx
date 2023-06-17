import { Fragment } from 'react'
import './face.css'
import Tarjeta from './tarjeta/Tarjeta'
import SearchIcon from '../icons/SearchIcon';
import ImgT from './Marca.svg'


export default function Face(prop) {
    return (
        <Fragment>
            <nav className='nav'>
                <div className='box-icon'>
                    <img src={<ImgT />} alt="logo" />
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
                <Tarjeta imgs="https://placekitten.com/500/500" />
                <Tarjeta imgs="https://placekitten.com/500/500" />
                <Tarjeta imgs="https://placekitten.com/500/500" />
                <Tarjeta imgs="https://placekitten.com/500/500" />
                <Tarjeta imgs="https://placekitten.com/500/500" />
                <Tarjeta imgs="https://placekitten.com/500/500" />
            </div>
        </Fragment>

    )
}
