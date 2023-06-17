import { Fragment } from 'react'
import './tarjeta.css'
import Star from '../../icons/star-fill.jsx'


export default function Tarjeta(prop) {
    /* const superH = document.getElementById("super-host")
    if (prop.super) {
        superH.innerHTML = `<p className='super-box'>SUPER HOST</p>`
    } else { superH.innerHTML = "" } */
    return (
        <Fragment>
            <div className='tarjeta' key={prop.key}>
                <div className='box-img'>
                    <img className='img' src={prop.imgs} alt="cuartos" />
                </div>
                <div className='type'>
                    <div id='super-host'>
                        <p className={(prop.super) ? 'super-box' : "empty"}>{(prop.super) ? "SUPER HOST" : ""}</p>
                    </div>
                    <div className={(prop.super) ? "fixed" : "fixed-ns"}>
                        <div className='type-text'>
                            <p>{!(prop.bed) ? "private room" : prop.content + ". " + prop.bed + " beds"}</p>
                        </div>
                        <div className='rate'>
                            <div className='box-star'>
                                <Star />
                            </div>
                            <p>{prop.rate}</p>
                        </div>
                    </div>

                </div>
                <div className='description'>
                    <p>{prop.descript}</p>
                </div>
            </div>
        </Fragment>
    )
}