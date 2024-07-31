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
            <Link to={'/chat/' + id }><i className="backArrow bi bi-arrow-left-short"></i></Link>
            <i className=" bi bi-three-dots-vertical"></i>
            </div>
            <div className='userInfoCard'>
                <div className='imgUser'>
                    <img src={thumbnail} alt="" />
                </div>
                <h1>{nombre}</h1>
                <span>{phoneNumber}</span>
                <div className='btnFunctionContainer'>
                    <div className='btnFunction'>
                        <i className="telephoneUser bi bi-telephone"></i>
                        <span>Llamar</span>
                    </div>
                    <div className='btnFunction'>
                        <i className="cameraUser bi bi-camera-video"></i>
                        <span>Video</span>
                    </div>
                    <div className='btnFunction'>
                        <i className="searchUser bi bi-search"></i>
                        <span>Buscar</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo
