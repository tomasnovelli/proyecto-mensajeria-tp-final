import React from 'react'
import './user.css'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../GlobalContext/GlobalContext'

const User = ({ userName, userImg, userConection, userId }) => {



  return (
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
        <i className="camera bi bi-camera-video"></i>
        <i className="telephone bi bi-telephone"></i>
        <i className="burgerMenu bi bi-three-dots-vertical"></i>
      </div>
    </div>
  )
}

export default User
