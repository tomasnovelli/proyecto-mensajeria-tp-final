import React from 'react'
import './contactListFooterStyles.css'
import { MdOutlinePhone } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ContactListFooter = () => {
  return (
    <div className='contactListfooter'>
      <div className='btn-contactFooter'>
        <i className="bi bi-chat-left-text-fill"></i>
        <span className='btn-footerText'>Chats</span>
      </div>
      <div className='btn-contactFooter'>
        <Link to='/comunidades'><FaUsers /></Link>
        <span className='btn-footerText'>Comunidades</span>
      </div>
    </div>
  )
}

export default ContactListFooter
