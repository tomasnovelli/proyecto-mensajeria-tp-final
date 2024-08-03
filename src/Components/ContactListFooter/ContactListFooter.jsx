import React from 'react'
import './contactListFooterStyles.css'
const ContactListFooter = () => {
  return (
    <div className='contactListfooter'>
      <div>
      <i className="bi bi-chat-left-text-fill"></i>
        <span>Chats</span>
      </div>
      <div>
      <i className=" telephone bi bi-telephone-fill"></i>
        <span>Llamadas</span>
      </div>
    </div>
  )
}

export default ContactListFooter
