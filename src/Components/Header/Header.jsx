import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { MdOutlinePhone } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import ChatDropdownMenu from '../ChatDropdownMenu/ChatDropdownMenu';



const User = ({ userName, userImg, userConection, userId }) => {

  return (

    <div>
      {
        userName === undefined
          ?
          <div className='userInfo'>
            <div className='imgContainer'>
              <img className='userImg' src={'/images/tomasUserImg.jpg'} alt={'yourImg'} />
            </div>
            <div className='interactiveButtons'>
              <img src="/images/whatsApp.png" alt="whatsApp" width='100px' />
            </div>
          </div>
          :
          <div className='userInfo'>
            <div className='userData'>
              <Link to='/'><i className="backArrow bi bi-arrow-left-short"></i></Link>
              <div className='imgContainer'>
                <img className='userImg' src={userImg} alt={userName + 'Img'} />
              </div>
              <Link to={'/chat/' + userId + '/info'} className='nameConection'>
                <span className='userName'>{userName}</span>
                <span className='userConection'>{userConection}</span>
              </Link>
            </div>
            <div className='interactiveButtons'>
              <HiOutlineVideoCamera className='camera' />
              <MdOutlinePhone className='telephone' />
              <ChatDropdownMenu userId={userId} />
            </div>
          </div>
      }
    </div>
  )
}

export default User
