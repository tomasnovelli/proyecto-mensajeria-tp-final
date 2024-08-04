import React from 'react'

import './chat.css'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../Components/GlobalContext/GlobalContext'
import { Header, ListChat, WrittingText } from '../../Components'


const Chat = () => {

  const { getContactDataById } = useGlobalContext()
  const params = useParams()
  const contactData = getContactDataById(params.contact_id)

  return (
    <div className='body'>
      
      <Header userName={contactData.nombre} userImg={contactData.thumbnail} userId={contactData.id} userConection={contactData.ultima_conexion} />
      <ListChat dataMessage={contactData.mensajes} />
      <WrittingText contactData={contactData} />
    </div>
  )
}

export default Chat
