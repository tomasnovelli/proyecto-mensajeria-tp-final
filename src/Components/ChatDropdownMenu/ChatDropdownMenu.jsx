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
        handleOpenCloseDropDownMenu 
    } = useGlobalContext()

/*     const [dropdown, setDropdown] = useState(false)
    const handleOpenCloseDropDownMenu = () => {
        setDropdown(!dropdown)
    } */
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
                <div>
                    <Link to={'/chat/' + userId + '/info'}>Ver Contacto</Link>
                    <button onClick={borrarMensajesDeContacto}>Vaciar Chat</button>
                </div>
            }
            <button onClick={handleOpenCloseDropDownMenu}>
                <i className="burgerMenu bi bi-three-dots-vertical"></i>
            </button>
        </div>
    )
}

export default ChatDropdownMenu
