import React, { useState } from 'react'
import './ChatDropdownMenu.css'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../GlobalContext/GlobalContext'
import { guardarHistorial } from '../../Helpers/chatData'


const ChatDropdownMenu = ({ userId }) => {

    const { 
        contactListData,
        setContactListData 
    } = useGlobalContext()

    const [dropdown, setDropdown] = useState(false)
    const handleOpenCloseDropDownMenu = () => {
        setDropdown(!dropdown)
    }
    const borrarMensajesDeContacto = (e) => {
        const historial = [
            ...contactListData
        ]
        const contactoBuscado = (historial.findIndex(contacto => contacto.id === userId))
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
