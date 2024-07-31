import React from 'react'
import './user.css'
import { Link } from 'react-router-dom'

const User = ({ userName, userImg, userConection }) => {

  return (
    <div className='userInfo'>
      <div className='userData'>
        <Link to='/'><i className="backArrow bi bi-arrow-left-short"></i></Link>
        <div className='imgContainer'>
          <img className='userImg' src={userImg} alt={userName + 'Img'} />
        </div>
        <div className='nameConection'>
          <span className='userName'>{userName}</span>
          <span className='userConection'>{userConection}</span>
        </div>
      </div>
      <div className='interactiveButtons'>
        <span><i className="camera bi bi-camera-video"></i></span>
        <span><i className="telephone bi bi-telephone"></i></span>
        <span><i className="burgerMenu bi bi-three-dots-vertical"></i></span>
      </div>
    </div>
  )
}

export default User
