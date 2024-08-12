import React, { useState } from 'react'
import './ChatDropdownMenu.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../GlobalContext/GlobalContext'
import { guardarHistorial, obtenerHistorial } from '../../Helpers/chatData'


const ChatDropdownMenu = ({ userId }) => {

    const { 
        contactListData,
        setContactListData,
        getContactIndex,
        dropdown,
        setDropdown,
        handleOpenCloseDropDownMenu,
        handleCloseDropdown 
    } = useGlobalContext()

    const borrarMensajesDeContacto = () => {
        const historial = obtenerHistorial()
        const contactoBuscado = getContactIndex(userId, historial)
        historial[contactoBuscado].mensajes = []
        setContactListData(historial)
        guardarHistorial(historial)
        setDropdown(!dropdown)
    }

    return (
        <div>
            {
                dropdown &&
                <div className='chatDropdownMenu'>
                    <Link className='contactInfoLink' onClick={handleCloseDropdown} to={'/chat/' + userId + '/info'}>Ver Contacto</Link>
                    <button className='btn-cleanChat' onClick={borrarMensajesDeContacto}>Vaciar Chat</button>
                </div>
            }
            <button className='burgerMenu' onClick={handleOpenCloseDropDownMenu}>
                <i className="bi bi-three-dots-vertical"></i>
            </button>
        </div>
    )
}

export default ChatDropdownMenu
