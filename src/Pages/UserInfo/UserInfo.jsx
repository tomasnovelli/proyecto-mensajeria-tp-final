import React from 'react'
import './userInfoStyle.css'
import { useGlobalContext } from '../../Components/GlobalContext/GlobalContext'
import { Link, useParams } from 'react-router-dom'

const UserInfo = () => {
    const { getContactDataById } = useGlobalContext()
    const params = useParams()
    const contactData = getContactDataById(params.contact_id)

    const {
        nombre,
        thumbnail,
        id,
        phoneNumber
    } = contactData

    return (
        <div>
            <div className='userInfoHeader'>
                <Link to={'/chat/' + id}><i className="backArrow bi bi-arrow-left-short"></i></Link>
                <i className=" bi bi-three-dots-vertical"></i>
            </div>
            <div className='userInfoCard'>
                <div className='imgUser'>
                    <img src={thumbnail} alt="" />
                </div>
                <h1>{nombre}</h1>
                <span>{phoneNumber}</span>
                <div className='btnFunctionContainer'>
                    <button className='btnFunction'>
                        <i className="telephoneUser bi bi-telephone"></i>
                        <span>Llamar</span>
                    </button>
                    <button className='btnFunction'>
                        <i className="ban bi bi-ban"></i>
                        <span>Bloquear</span>
                    </button>
                </div>
            </div>
            <div>
                <p>Mereces lo que sueñas</p>
            </div>
            <div>
                <div>
                    <span>notificaciones</span>
                    <div className="switch-button">
                        <label htmlFor="switch-label" className="switch-button__label"></label>
                        <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox"></input>
                        
                    </div>
                </div>
                <div>
                    <h3>Cifrado</h3>
                    <span>los mensajes están cifrados de extremo a extremo. Haz clic para verificarlo.</span>
                </div>
            </div>
            <div>
                <button><i className="bi bi-heart"></i></button>
                <span>Añadir a Favoritos</span>
            </div>
        </div>
    )
}

export default UserInfo
