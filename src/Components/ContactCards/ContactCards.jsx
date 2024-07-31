import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const ContactCards = ({ contactData }) => {

    const {
        nombre,
        thumbnail,
        ultima_conexion,
        id,
        mensajes
    } = contactData

    return (
        <div className='contactos'>
            <div className='containerImg'>
                <img className={'img_' + nombre.toLowerCase()} src={thumbnail} alt="" />
            </div>
            <Link className='contactCard' to={'/chat/' + id}>
                <span>{nombre}</span>
                <span></span>
                <div className='sideInfo'>
                    <span className='lastConection'>{ultima_conexion}</span>
                    <span className='msjNumber'>{mensajes.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default ContactCards
