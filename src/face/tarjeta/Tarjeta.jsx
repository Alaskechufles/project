import { Fragment } from 'react'
import './tarjeta.css'
import Star from '../../icons/star-fill.jsx'


export default function Tarjeta(prop) {
    return (
        <Fragment>
            <div className='tarjeta'>
                <div className='box-img'>
                    <img className='img' src={prop.imgs} alt="cuartos" />
                </div>
                <div className='type'>
                    <div className='super-host'>
                        <p>SUPER HOST</p>
                    </div>
                    <div className='type-text'>
                        <p>Entire apartment . 2 beds</p>
                    </div>
                    <div className='rate'>
                        <div className='box-star'>
                            <Star />
                        </div>
                        <p>4.40</p>
                    </div>
                </div>
                <div className='description'>
                    <p>Stylist apartment in center of the city</p>
                </div>
            </div>
        </Fragment>
    )
}