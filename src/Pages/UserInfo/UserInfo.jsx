import React from 'react'
import './userInfoStyle.css'
import { useGlobalContext } from '../../Components/GlobalContext/GlobalContext'
import { Link, useParams } from 'react-router-dom'
import { FaRegBell } from "react-icons/fa";
import { FavoriteButton, SwitchButton } from '../../Components/index';
import { AiOutlineLock } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";




const UserInfo = () => {
    const {
        getContactDataById,
        contactListData,
        handleOpenCloseDropDownMenu,
        dropdown,
        setDropdown
    } = useGlobalContext()

    const params = useParams()
    const contactData = getContactDataById(params.contact_id, contactListData)

    const {
        nombre,
        thumbnail,
        id,
        phoneNumber,
        countryPhoneId,
        userStateText
    } = contactData

    return (
        <div className='userInfo'>
            <div className='userInfoHeader'>
                <Link to={'/chat/' + id}><i className="backArrow bi bi-arrow-left-short"></i></Link>
                <div className='userInfoCard'>
                    <div className='imgUser'>
                        <img src={thumbnail} alt="" />
                    </div>
                    <h1>{nombre}</h1>
                    <span>{countryPhoneId + phoneNumber}</span>
                    <div className='btnFunctionContainer'>
                        <Link to={'/chat/' + id + '/calling'}>
                            <button className='btnFunction'>
                                <i className="telephoneUser bi bi-telephone"></i>
                                <span>Llamar</span>
                            </button>
                        </Link>
                    </div>
                </div>
                {
                    dropdown &&
                    <Link to={'/'}>Ir a contactos</Link>
                }
                <button className='burgerMenu' onClick={handleOpenCloseDropDownMenu}>
                    <i className="bi bi-three-dots-vertical"></i>
                </button>

            </div>

            <div className='userStateText'>
                <span>{userStateText}</span>
            </div>

            <div className='notificationsState'>
                <div className='notifications'>
                    <FaRegBell />
                    <span>Notificaciones</span>
                </div>
                <div className="switch-button">
                    <SwitchButton />
                </div>
            </div>

            <div className='messageEncryption'>
                <AiOutlineLock className='lockIcon' />
                <div className='messageEncryptionText'>
                    <h2 className='encryptionTitle'>Cifrado</h2>
                    <p className='encryptionText'>Los mensajes están cifrados de extremo a extremo. Haz clic para verificarlo.</p>
                </div>
            </div>
            <FavoriteButton />
        </div>
    )
}

export default UserInfo
