import React from 'react'
import { useGlobalContext } from '../../Components/GlobalContext/GlobalContext'
import { Link, useParams } from 'react-router-dom'
import { ImPhoneHangUp } from "react-icons/im";
import { PiSpeakerSimpleHighBold } from "react-icons/pi";
import { LuMicOff } from "react-icons/lu";
import { AiOutlineLock } from "react-icons/ai";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import './userCall.css'

const UserCall = () => {
    const {
        getContactDataById,
    } = useGlobalContext()

    const params = useParams()
    const contactData = getContactDataById(params.contact_id)

    const {
        nombre,
        thumbnail,
        id
    } = contactData

    return (
        <div className='userCall'>
            <div className='callEncryption'>
                <AiOutlineLock className='lockIconCall' />
                <span>Cifrado de extremo a extremo</span>
            </div>

            <div className='callContainer'>
                <div className='userInfoCardCall'>
                    <div className='imgUser'>
                        <img src={thumbnail} alt="" />
                    </div>
                    <h2>{nombre}</h2>
                    <span>Llamando</span>
                </div>

                <div className='callButtons'>
                    <PiSpeakerSimpleHighBold />
                    <HiOutlineVideoCamera className='video' />
                    <LuMicOff className='mic' />
                    <Link className='btn-cutCallContainer' to={'/chat/' + id + '/info'}>
                            <ImPhoneHangUp className='btn-cutCall' />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default UserCall
