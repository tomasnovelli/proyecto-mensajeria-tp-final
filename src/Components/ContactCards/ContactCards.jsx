import React from 'react'
import { Link } from 'react-router-dom'
import './contactCardsStyle.css'
import { contactLastMessage } from '../../Helpers/chatData'
const ContactCards = ({ contactData }) => {

    const {
        nombre,
        thumbnail,
        ultima_conexion,
        id,
        mensajes
    } = contactData
    const lastMessage = contactLastMessage(mensajes)
    
    return (
        <div className='contactsCardsContainer'>
            <div className='containerImg'>
                <img src={thumbnail} alt={'img_' + nombre.toLowerCase()} />
            </div>
            <Link className='contactCard' to={'/chat/' + id}>
                <div className='topContactCardInfo'>
                    <span>{nombre}</span>
                    <span className='lastConection'>{ultima_conexion}</span>
                </div>
                <div className='bottomContactCardInfo'>
                    <span className='lastMessage'>{lastMessage}</span>
                </div>
            </Link>
        </div>
    )
}

export default ContactCards
