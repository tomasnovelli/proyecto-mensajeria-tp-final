import React, { useState } from 'react'
import './writtingText.css'
import { useGlobalContext } from '../GlobalContext/GlobalContext'
import { v4 as uuid } from 'uuid'
import { guardarMensaje } from '../../Helpers/chatData'

const WrittingText = ({ contactData }) => {

  const [messageInput, setMessageInput] = useState('')

  const { updateContact } = useGlobalContext()


  const handleChangeContentValue = (e) => {
    setMessageInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevoMensaje = {
      author: 'Yo',
      text: messageInput,
      state: 'entregado',
      date: '13:52',
      id: uuid()
    }
    const updatedContactData = {
        ...contactData, 
        mensajes: [
          ...contactData.mensajes, 
            nuevoMensaje
        ]
    }
    updateContact(updatedContactData)
    setMessageInput('')
  }


  return (

    <div className='writtingText'>
      <form className='form' onSubmit={handleSubmit}>

        <div className='textArea'>
          <label htmlFor="text_input"></label>
          <i className="bi bi-emoji-smile smileFace"></i>
          <input className='textInput' placeholder='Mensaje' type="text" name='text' id='text' onChange={handleChangeContentValue} value={messageInput} />
          <i className="bi bi-paperclip"></i>
          <i className="bi bi-camera"></i>
        </div>

        <button className='btn-submit' type="submit"><i className="bi bi-send-fill"></i></button>
      </form>
    </div>

  )
}

export default WrittingText
